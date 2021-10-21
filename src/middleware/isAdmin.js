import router from 'page';
import roleStore from "../stores/roles";

export default function (ctx, next) {
    let roles;

    roleStore.subscribe(rolesValue => {
        roles = rolesValue;
    });

    console.log(roles);
    if (roles && roles.roles.length) {
        if (roles.roles.indexOf('admin') !== -1) {
            next();
        } else {
            router.redirect('./');
        }
    } else {
        router.redirect('./')
    }
}