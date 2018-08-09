'use strict';

const CONFIG = {
    "SERVICE_BASE": "http://192.168.0.8:9020/api",
    "SERVICE_URL": {
        "BASE": "/",
        "REGISTRO": "/registrer",
        "LOGIN": "/login",
        "LOGOUT": "/logout",
        "FILLTIPOARTICULO": "/tipos-articulos/fill",
        "VERIFYARTICULO": "/tipos-articulos/verify",
        "ALLARTICULOS": "/articulos/all",
        "SERVEIMAGEARTICULOS": "/articulos/img",
        "TIPOSARTICULOSADD": "/tipos-articulos/add",
        "ADDARTICLE": "/articulos/add",
        "DELETEARTICLE": "/articulos/delete",
        "UPDATEARTICLE": "/articulos/update",
        "GENERATEBARCODE":"/articulos/barcode",
        "ALLARTICLESANDPRICE":"/articulos/precios",
        "GETCURRENCY": "/currency/all",
        "ADDCURRENCY": "/currency",
        "FILLCURRENCY": "/currency/fill",
        "FILLTIPODOCUMENTO": "/tipos-documentos/fill",
        "ADDCLIENT": "/cliente/add",
        "ALLCLIENT": "/cliente/all",
        "EDITCLIENT": "/cliente/edit",
        "SOFTDELETECLIENT": "/cliente/soft-delete",
        "ALLDISABLEDCLIENT": "/cliente/all/disable",
        "ENABLECLIENT": "/cliente/enable",
        "ADDPROVIDER": "/provider/add",
        "LISTPROVIDER": "/provider/all",
        "DISABLEPROVIDER": "/provider/soft-delete",
        "UPDATEPROVIDER": "/provider/edit",
        "GETDISABLEDPROVIDERS": "/provider/all/disable",
        "PROVIDER": "/provider",
        "SEAL": "/seal",
        "SERVE": "/serve",
        "ENABLEPROVIDER": "/provider/enable",
        "FILLCLIENT": "/client/fill",
        "CLIENT": "/client",
        "ACCOUNT": "/account",
        "MOV": "/movement",
        "FILLPROVIDER": "/provider/fill",
        "DET": "/detail"
    }
};

export default CONFIG;