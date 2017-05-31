# -*- coding:utf-8 -*-
"""
@author: xihao liang
@created: 2017.05.07
"""

import json
import time
import datetime

invalid_device_ids = set()
#set([
#    '584327b4-30ff-4b6b-9562-d33db1771688',
#    'FF71FC50-3A7E-4EA8-8DCB-567CCE798A8E',
#])

MAX_GAP = 15*60
MAX_SESSION = 50


def timestamp_to_date(t):
    return time.strftime('%Y%m%d', time.gmtime(time.time()))


def timestamp_to_weekday(t):
    return datetime.datetime.utcfromtimestamp(t).weekday()


def load_log(date_str):
    date = datetime.datetime.strptime(date_str, '%Y%m%d')
    fname = 'log/eventData.%s.log' % date.strftime('%Y-%m-%d')

    logs = []
    with open(fname, 'r') as fobj:
        for line in fobj:
            line = line.strip()
            if line == '':
                continue

            row = json.loads(line)
            if row[0]['deviceId'] in invalid_device_ids:
                continue

            row = [log for log in row if log['event'] == 'playGame']
            for log in row:
                log['time'] = str_to_timestamp(log['time'])
                log['hasWon'] = (log['hasWon'] == 1)
            logs.extend(row)

    return logs


def load_user_sessions(date_str):
    fname = '../user_sessions/%s.json' % date_str
    return json.load(open(fname, 'r'))


def sessionize(logs):
    assert len(logs) > 0
    logs = sorted(logs, key=lambda k:k['time'])

    n_log = len(logs)
    last_log = n_log - 1
    sessions = []
    current_session = []

    for i in range(last_log):
        log = logs[i]
        if i > 0:
            last_log = logs[i-1]
            if last_log['time'] == log['time']: # supposed to be the same log
                if not last_log['sn'] == last_log['sn']:
                    raise Warning('BRAIN FUCK')
                continue

        next_log = logs[i + 1]
        if i == 0:
            log['time_gap'] = None
        else:
            last_log = logs[i - 1]
            time_gap = log['time'] - last_log['time']
            log['time_gap'] = time_gap
        
        if (log['time_gap'] <= MAX_GAP) or log['seqGameType'] <= 4:
            log['hasNext'] = True
            log['nextReplay'] = (log['seqGameType'] in [3,4] or log['sn'] == next_log['sn'])
            current_session.append(log)
        else:
            sessions.append(current_session)
            log['hasNext'] = False
            log['nextReplay'] = False
            current_session = [log, ]

    log = logs[-1]
    log['hasNext'] = None
    log['nextReplay'] = None

    if n_log > 1:
        log['time_gap'] = log['time'] - logs[-2]['time']
    else:
        log['time_gap'] = None
    current_session.append(log)
    sessions.append(current_session)

    return sessions


def sort_by_time(logs):
    return sorted(logs, key=lambda k:k['time'])


def reduce_by_key(items, key):
    def _reduce_to_list(key_list, item):
        key, value = item
        if key in key_list:
            key_list[key].append(value)
        else:
            key_list[key] = [value, ]
        return key_list

    key_items = reduce(_reduce_to_list, map(lambda item:(key(item), item), items), {})
    return key_items


def reduce_by_user(logs):
    return reduce_by_key(logs, lambda k:k['deviceId'])


def reduce_by_sn(logs):
    return reduce_by_key(logs, lambda k:k['sn'])


def get_user_sessions_daily(date):
    logs = load_log(date)
    user_logs = reduce_by_user(logs)
    user_sessions = {}
    for user, logs in user_logs.items():
        sessions = sessionize(logs)
        
        valid_user = True
        #for logs in sessions:
        #    if len(logs) > max_session_length:
        #        valid_user = False
        #        break
        if valid_user:
            user_sessions[user] = sessions

    return user_sessions


def get_user_sessions_period(start_date_str, end_date_str = None):
    if end_date_str is None:
        end_date_str = start_date_str
    
    start_date = datetime.datetime.strptime(start_date_str, '%Y%m%d')
    end_date = datetime.datetime.strptime(end_date_str, '%Y%m%d')

    user_sessions = {}

    date = start_date
    invalid_users = set()

    while not date > end_date:
        date_str = date.strftime('%Y%m%d')
        sub_user_sessions = load_user_sessions(date_str)
        
        for user, sessions_ in sub_user_sessions.items():
            if not user in user_sessions:
                user_sessions[user] = sessions_
            else:
                sessions = user_sessions[user]

                last_session = sessions[-1]
                new_session = sessions_[0]

                if new_session[0]['time'] > last_session[-1]['time']:
                    last_session[-1]['time_gap'] = new_session[0]['time'] - last_session[-1]['time']
                    sessions.extend(sessions_)
                else:
                    n_sessions = len(sessions)
                    logs = []

                    for i in range(n_sessions):
                        if sessions[-1][-1]['time'] >= new_session[0]['time']:
                            logs.extend(sessions[-1])
                            del sessions[-1]
                        else:
                            break

                    idx = None
                    for i in range(len(sessions_)):
                        if sessions_[i][0]['time'] <= last_session[-1]['time']:
                            logs.extend(sessions_[i])
                        else:
                            idx = i
                            break
                    
                    tmp_sessions = sessionize(logs)

                    sessions.extend(tmp_sessions)

                    if idx is not None:
                        sessions.extend(sessions_[idx:])

        date += datetime.timedelta(days=1)
    
    '''
    for user in invalid_users:
        sessions = user_sessions[user]
        print user, map(lambda logs:len(logs), sessions)
    '''
    return user_sessions


def load_week():
    user_sessions = get_user_sessions_period('20170416', '20170514')
    for user, sessions in user_sessions.items():
        invalid_c = 0.
        c = 0.
        for session in sessions:
            logs = session
            c += len(logs)-1

            for i, log in enumerate(logs):
                if 'time_gap' not in log:
                    print i
            invalid_c += len(filter(lambda log:log['time_gap'] > 30., logs[1:]))

        if c == 0. or invalid_c / c >= 0.5:
            user_sessions.pop(user)

    return user_sessions

def dump_user_sessions(date):
    user_sessions = get_user_sessions_daily(date)
    json.dump(user_sessions, open('user_sessions/%s.json' % date, 'w'))


def get_session_distribution(user_sessions):
    timeseries = {}
    session_timeseries = {}
    for sessions in user_sessions.values():
        for session in sessions:
            for single in session:
                timestamp = single['time']
                d = datetime.datetime.fromtimestamp(timestamp)
                day = d.strftime("%Y%m%d")
                if day in timeseries.keys():
                    timeseries[day] = timeseries[day] + 1
                else:
                    timeseries[day] = 1
            # session time
            timestamp = session[0]['time']
            d = datetime.datetime.fromtimestamp(timestamp)
            day = d.strftime("%Y%m%d")
            
            if day in session_timeseries.keys():
                session_timeseries[day] = session_timeseries[day] + 1
            else:
                session_timeseries[day] = 1

    outfile = open('../data/paiju.json','w')
    res_json = json.dumps(timeseries,sort_keys=True)
    outfile.write(res_json)
    outfile.close()
    outfile = open('../data/session_distribution.json','w')
    res_json = json.dumps(session_timeseries,sort_keys=True)
    outfile.write(res_json)
    outfile.close()
    

def get_session_week_distribution(user_sessions):
    timeseries = {}
    session_timeseries = {}
    for sessions in user_sessions.values():
        for session in sessions:
            for single in session:
                timestamp = single['time']
                d = datetime.datetime.fromtimestamp(timestamp)
                day = d.weekday()
                if day in timeseries.keys():
                    timeseries[day] = timeseries[day] + 1
                else:
                    timeseries[day] = 1
            # session time
            timestamp = session[0]['time']
            d = datetime.datetime.fromtimestamp(timestamp)
            day = d.weekday()
            
            if day in session_timeseries.keys():
                session_timeseries[day] = session_timeseries[day] + 1
            else:
                session_timeseries[day] = 1
    outfile = open('../data/session_distribution_week.json','w')
    res_json = json.dumps(timeseries,sort_keys=True)
    outfile.write(res_json+'\n')
    res_json = json.dumps(session_timeseries,sort_keys=True)
    outfile.write(res_json)
    outfile.close()

def get_user_returning(user_sessions):
    timeseries = {}
    for sessions in user_sessions.values():
        for session in sessions:
            for single in session:
                timestamp = single['time']
                device_id = single['deviceId']
                d = datetime.datetime.fromtimestamp(timestamp)
                day = d.strftime("%m%d")
                if day in timeseries.keys():
                    timeseries[day].add(device_id) 
                else:
                    timeseries[day] = set()
                    timeseries[day].add(device_id)
    outfile = open('../data/user_returnning.json','w')
    timeseries = sorted(timeseries.iteritems(), key= lambda asd:asd[0], reverse=False)
    # res_json = json.dumps(timeseries,sort_keys=True)
    # for timeserial in timeseries.keys():
        # outfile.write(timeserial + ' ' + str(timeseries[timeserial]) + '\n')
    for i in range(0,len(timeseries)):
        #outfile.write(timeseries[i][0]+'\t')
        outfile.write('['+str(i)+',0,'+str(len(timeseries[i][1]))+'],')
        for j in range(i+1,len(timeseries)):
            num = 0
            for item in timeseries[i][1]:
                if item in timeseries[j][1]:
                    num = num + 1
            outfile.write('['+str(i)+','+str(j-i)+','+str(num)+'],')
        # outfile.write('\n')
    outfile.write('\n')
    for i in range(0,len(timeseries)):
        outfile.write("\""+timeseries[i][0]+'\",')

    outfile.close()

def get_user_hours(user_sessions):
    timeseries = {}
    session_timeseries = {}
    for sessions in user_sessions.values():
        for session in sessions:
            for single in session:
                timestamp = single['time']
                d = datetime.datetime.fromtimestamp(timestamp)
                hour = d.hour
                if hour in timeseries.keys():
                    timeseries[hour] = timeseries[hour] + 1
                else:
                    timeseries[hour] = 1
            # session time
            timestamp = session[0]['time']
            d = datetime.datetime.fromtimestamp(timestamp)
            hour = d.hour
            
            if hour in session_timeseries.keys():
                session_timeseries[hour] = session_timeseries[hour] + 1
            else:
                session_timeseries[hour] = 1
    outfile = open('../data/session_distribution_hours.json','w')
    res_json = json.dumps(timeseries,sort_keys=True)
    outfile.write(res_json+'\n')
    res_json = json.dumps(session_timeseries,sort_keys=True)
    outfile.write(res_json)
    outfile.close()

user_sessions = load_week()
#get_session_distribution(user_sessions)
#get_session_week_distribution(user_sessions)
# get_user_returning(user_sessions)
get_user_hours(user_sessions)