const webhookSite = 'https://webhook.site/#!/61ea7c3c-d898-455a-97b0-0b49e73f7f3b/c57731bb-65d7-4a82-8bcf-3c8dd70441ef/1'
const url = 'https://webhook.site/61ea7c3c-d898-455a-97b0-0b49e73f7f3b'

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

const getLocalTime = () => {
  const date = new Date()
  return date.toLocaleTimeString()
}

const getUserIp = async () => {
  const response = await fetch('https://api.ipify.org?format=json')
  const { ip } = await response.json()
  return ip
}

const getUserData = async () => {
  const ip = await getUserIp()
  const time = await getLocalTime()
  return {
    localIp: ip,
    localTime: time,
    name: 'Angel Velasco'
  }
}

const saveUserData = async () => {
  const localUserData = await getUserData()
  options.body = JSON.stringify(localUserData)
  const response = await fetch(url, options);
  return response
}

export {
  saveUserData
}