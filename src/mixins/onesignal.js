// export default {
//     methods: {
//         sendNotification(players, content="", title="", subtitle=""){
//             $.ajax({
//                 url: "https://onesignal.com/api/v1/notifications",
//                 method: "post",
//                 data: {
//                     app_id: "7bc00071-619c-41ed-906e-9095f6bd97ec",
//                     include_player_ids: players,
//                     contents: {
//                         "en": content,
//                         "es": content,
//                     },
//                     headings: {
//                         "en": title,
//                         "es": title,
//                     },
//                     subtitle: {
//                         "en" : subtitle,
//                         "es" : subtitle,
//                     }  
//                 }
//             })
//         },
//         async OneSignalAuthStatus(){
//             return OneSignal.getNotificationPermission().then(value => {
//                return value;
//             })
//         },
//         async OneSiganlGetPlayerID(){
//             return OneSignal.getUserId().then(value => {
//                 return value;
//             })
//         },
//         OneSiganlSetExternalUserID(id){
//             return OneSignal.setExternalUserId(id).then(value => {
//                 return value;
//             })
//         },
//         OneSignalInit(user = {}){
//             this.OneSignalAuthStatus().then(value => {
//                 if(value == "granted"){
//                     this.OneSiganlGetPlayerID().then(value => {
//                         this.saveUserDbToken(user.usuario, value);
//                     })

//                     if(user.usuario){
//                         this.OneSiganlSetExternalUserID(user.usuario);
//                     }

//                     if(user.Rol){
//                         this.OneSignalAddTag("role", user.Rol.nombre)
//                     }
//                 }
//             })

//         },
//         OneSignalAddTag(key, value){
//             return OneSignal.sendTag(key, value).then(value => {
//                 return value;
//             })
//         },
//         saveUserDbToken(usuario, token){
//             $.ajax({
//                 type: 'post',
//                 url: this.$root.API_URL+'/update_user_token.php',
//                 dataType: 'json',
//                 data: JSON.stringify({
//                     "user": usuario,
//                     "token": token,
//                 }),
//                 beforeSend: function(x) {
//                     if (x && x.overrideMimeType) {
//                         x.overrideMimeType("application/json");
//                     }
//                 },
//                 success: (response) => {
//                     if(response.success == true){
//                         console.log("User token was successfully updated");
//                     }
//                     else {
//                         console.log("User token couldn't be updated");
//                     }
//                 },
//                 error: (request, status, error) => {
//                     console.log("User token couldn't be updated");
//                     console.log(error);                    
//                 }
//             })
//         }
//     }
// }