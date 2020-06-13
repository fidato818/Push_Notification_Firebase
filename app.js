// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAUOXha6yzw93ExiauY93VjcotiVx70cpE",
    authDomain: "react-login818.firebaseapp.com",
    databaseURL: "https://react-login818.firebaseio.com",
    projectId: "react-login818",
    storageBucket: "react-login818.appspot.com",
    messagingSenderId: "693313502084",
    appId: "1:693313502084:web:89c4045f232db0ca"
};


firebase.initializeApp(firebaseConfig);
// getting messaging Object from firebase

const messaging = firebase.messaging();
messaging.requestPermission().then(function () {
    console.log('Notification permission granted.');
    return messaging.getToken();
}).then(function (token) {
    // Displaying user token
    console.log('token >>>> ', token);
}).catch(function (err) { // Happen if user deney permission
    console.log('Unable to get permission to notify.', err);
});
// // do whatever you want on getting push notification in your front application
// messaging.onMessage(function (payload) {
//   console.log('onMessage', payload);
// });
// fetch("https://us-central1-pwapushnotification-633e2.cloudfunctions.net/helloWorld", {
//   method: 'POST',
//   body: {
//       token: "ewD5MHBousU:APA91bEuIz1bS4E1U9bgZdgO3YBe2Uk9LLhvbzQC_YMtfKNoBHW6lpbXFM-_kqc6PGOXDs63s_5ujhArq32Aq7Q6kQ0ZIirLZxIt630fB5rIc-MZ2rjeiGKfiw1MWS1f2C83zDsViZb075P6lh4tJOqMPcI_y-dgNA",
//       title: "my title",
//       message: "my body message"
//   },
//   headers: {
//       'Content-Type': 'application/json'
//   }
// }).then((res) =>res)




// checking is Browser supports the Service Worker..
if ('serviceWorker' in navigator) {

    console.log('Service Worker is supported');

    // if service worker supported then register my service worker
    navigator.serviceWorker.register('firebase-messaging-sw.js').then(function (reg) {
        console.log('Successfully Register :^)', reg);

        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function (subscription) {
            console.log('subscription:', subscription.toJSON());
            // GCM were used this endpoint
            console.log('endpoint:', subscription.endpoint);
        });

    }).catch(function (error) {
        console.log('SW Registration Failed: :^(', error);
    });

}