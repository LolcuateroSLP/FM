const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return "";
}

const hasRole = (rol) => {
    let user = getCookie("user");

    if(user.Rol && user.Rol.nombre == rol){
        return true;
    }
    return false;
}

export const auth = (to, from, next) => {
    let user = getCookie("user");
    if(user != ""){
        next();
    }
    else {
        next({
            path: '/',
        })
    }
}

export const guest = (to, from, next) => {
    let user = getCookie("user");
    if(user == ""){
        next();
    }
    else {
        next({
            path: '/dashboard',
        })
    }
}

export const APIAdmin = (to, from, next) => {
    if(hasRole("Admin API Control")){
        next();
    }
    else {
        next({
            path: '/404',
        });
    }
}

// export const coordinadorGarantias = (to, from, next) => {
//     if(hasRole("Coordinador de Garantías")){
//         next();
//     }
//     else {
//         next({
//             path: '/404',
//         });
//     }
// }

// export const coordinadorCentrosCosto = (to, from, next) => {
//     if(hasRole("Coordinador de Centros de Costo") || hasRole("Coordinador de Activos")){
//         next();
//     }
//     else {
//         next({
//             path: '/404',
//         });
//     }
// }