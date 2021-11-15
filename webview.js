const SELECTOR_NOTIFICATIONS = '#atlassian-navigation-notification-count'


module.exports = (Franz) => {
  const getMessages = () => {
    let notificationsCount = 0
    let $elList = document.querySelectorAll(`${SELECTOR_NOTIFICATIONS}`)
    if ($elList.length > 0)
        notificationsCount = parseInt($elList[0].textContent)

    Franz.setBadge(notificationsCount, notificationsCount);
  };

  Franz.loop(getMessages);
};
