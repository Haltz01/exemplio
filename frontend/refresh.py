import requests
import re
import json

## Getting login cookies


headers = {
    'Sec-Fetch-Mode': 'cors',
    'Origin': 'https://exempl.io:2083',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
    'Content-type': 'application/x-www-form-urlencoded',
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
    'Referer': 'https://exempl.io:2083/cpsess1161877753/frontend/paper_lantern/lveversion/nodejs-selector.html.tt?login=1&post_login=39275147838009',
    'Sec-Fetch-Site': 'same-origin',
    'DNT': '1',
}

params = (
    ('login_only', '1'),
)

user = input("Please insert administrator's username: ")
passw = input("Please insert administrator's password: ")

user = user[0:-1]
data = {
  'user': user,
  'pass': passw,
}

response = requests.post('https://exempl.io:2083/login/', headers=headers, params=params, data=data)

security_token = json.loads(response.content)['security_token']
print(security_token)

rawCookies = response.headers['Set-Cookie']

cpsession = re.search(r'(?:cpsession=)([^;]+)', rawCookies).group(1)

## Refreshing application

print(cpsession)

cookies = {
    '_ga': 'GA1.2.925855742.1569118317',
    '_gid': 'GA1.2.1650964089.1572729621',
    'timezone': 'America/Sao_Paulo',
    'cpsession': cpsession
}

headers = {
    'Sec-Fetch-Mode': 'cors',
    'Origin': 'https://exempl.io:2083',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json, text/plain, */*',
    'Cache-Control': 'no-cache',
    'Referer': 'https://exempl.io:2083/',
    'Sec-Fetch-Site': 'same-origin',
    'DNT': '1',
}

params = (
    ('cgiaction', 'sendRequest'),
)

data = {
  'command': 'cloudlinux-selector',
  'method': 'restart',
  'params[interpreter]': 'nodejs',
  'params[app-root]': 'exempliorevamp'
}

response = requests.post('https://exempl.io:2083'+security_token+'/3rdparty/cloudlinux/cloudlinux-selector.cgi', headers=headers, params=params, cookies=cookies, data=data)

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.post('https://exempl.io:2083/cpsess5237250613/3rdparty/cloudlinux/cloudlinux-selector.cgi?cgiaction=sendRequest', headers=headers, cookies=cookies, data=data)

# print(dir(response))
# print(response.content)

print(response.status_code)
if response.status_code == 200:
    print('Success:',json.loads(response.content)['result'] == "success")
else:
    print(response.headers)