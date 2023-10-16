const admin = require("firebase-admin");

const serviceAccount = {
  type: "service_account",
  project_id: "web-database-dd04a",
  private_key_id: "a3451648aee19383a69ce1f3156202a80d75ae1e",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQDEDQ1SwBgdFLRk\nEsWHCxmvI5VlsVRgOsQXPysaVXG3ac9bRZ7IboXi40bgYO1YYmado44KcFFObvsw\nqE+ZRhvpYFcpB/OdW83hjHsleAJqNwAYhzF5fuYw47rNFbeBazfi6rXSH16goZ7H\nt9ldDM9CtuvdHUS2wywm50QB6+7lCU6cqv3Fos4a9XRuz0/8nrlBuNs7eeQQNgwI\nQ6uv/2A/E38DlTDJKjEEDJUUpl0cG4nfs9jAn15Zm6Q+iCWSnDcSGtJ8nQ/YFDX8\nNYFvYz1wPERPRZVkh8OPPf4e7hsseZtr4s6frmmBhoRBnorhqo9bM0qLocvfh/l7\nftNG1FinAgMBAAECgf8i9A45xX666y/DfTx1Qj2E7lMuUf7PAJqMid3GIs6NQG9M\nH6a/lbLrZb5oFbBhgkCLDQVFuFS/RB8hbBUWZxGfNzYRlb4zuwM+AkBHiy2tYB3g\nZqauaB7jENQBCQEFQb4MUhIR1s66x0Lzc8LawBpSkGEv2A8ftgv/gY4A2IIV1Nv2\nSh9kTlOw6TDNUN0CLRSUwj++4flKlH6zEFQzep3JEkAlf2X6fiCCcQJV6IUAiVpN\n39M/SzIoX84rAryUvVFEIUrRINbLqB6UmGSlBQ8JeVAk4mqpih+gYJr52She0UY2\nsy2Ad0qIcTqYwGk/L3vtf8a3RrNwPTqzvzXpIT0CgYEA9+B/LUC2pH0NNRxG90lE\nrbKt6N3IFPB7IQN8/QObO5RgKHue4i0cimnPY6bVEr26mUqwGApMcLudto+E06um\negIt13yuR4spDpxGQRGAt4R8C1A5YjGqCxyYnX2eqIdpIw+sUpqXMAw/TOHbZYEz\nab41+XnBRnpE3dwLgf5glAMCgYEAynnGJoUuXsoIMudahXftS7gxfhUmJdywhw85\nrGkfNItQITcISasefLaAOcS2DVfMwSiBAovCb/J7Ld/EbyYFVI6n4xyUAQMio0wq\nt9rPB2BaheRnGeSUxudhGhy8OCW2umkTVP+N4z49H++lu8U2xqDAx5o5BPIAcTMj\nF/rE8Y0CgYB9OuhFnoontB32FSEtUdDmyHzgRxwMqCos1axRz36frSifi0UME6p1\nq1thhyni3APn6jnpC1rvIXpef0emAPSMc4lhctZBwuatQPqlaQhUrxRUSuWS3HCC\nSKI5/vsnPbI6SnLPENcNKULZvsmvEIU/CSAPuBmTV7ZvN/qAZFm6rQKBgCBRscRi\nS9WLkCV38mYNj44fl57Vh2JRyMe2MXGI0hdUCXVT0HnZ26LyiqMt+BVHJ4LJkVYz\nstSlsu3Oow9O1Vj68Gd7H1DODFBejw8L2TIHOkvW+nISn4DkXAaMAatAsdstfI17\nwU09mQoo+Z5wS18HN95kiqd0bYekLvzb5WXdAoGAeaJpvkAxQerG1YbYeXNJkO2W\noxUJ2TO9qm5I2Ghd2ZLA+ufA1RfDbaTqq5lBbL2BRIdV+h9bxSfd/jbAI7yShRaZ\nd7Y6kdXgj3a3K3BIYhvtpuM/pSY2KepZrFaVmGP8jk2Rom+zAlMlrTMIFW3F0FcG\nzsiy2Sok7NHz5ZAW910=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-ue36c@web-database-dd04a.iam.gserviceaccount.com",
  client_id: "105024685661469172804",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ue36c%40web-database-dd04a.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
