"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
            [1551], {
                81435: function(e, t, i) {
                    i.d(t, {
                        $: function() {
                            return signInWithCredential
                        },
                        A: function() {
                            return p
                        },
                        B: function() {
                            return signOut
                        },
                        C: function() {
                            return deleteUser
                        },
                        D: function() {
                            return debugErrorMap
                        },
                        E: function() {
                            return m
                        },
                        F: function() {
                            return u
                        },
                        G: function() {
                            return g
                        },
                        H: function() {
                            return initializeAuth
                        },
                        I: function() {
                            return connectAuthEmulator
                        },
                        J: function() {
                            return AuthCredential
                        },
                        K: function() {
                            return EmailAuthCredential
                        },
                        L: function() {
                            return OAuthCredential
                        },
                        M: function() {
                            return PhoneAuthCredential
                        },
                        N: function() {
                            return A
                        },
                        O: function() {
                            return h
                        },
                        P: function() {
                            return PhoneAuthProvider
                        },
                        Q: function() {
                            return EmailAuthProvider
                        },
                        R: function() {
                            return RecaptchaVerifier
                        },
                        S: function() {
                            return d
                        },
                        T: function() {
                            return TotpMultiFactorGenerator
                        },
                        U: function() {
                            return FacebookAuthProvider
                        },
                        V: function() {
                            return GoogleAuthProvider
                        },
                        W: function() {
                            return GithubAuthProvider
                        },
                        X: function() {
                            return OAuthProvider
                        },
                        Y: function() {
                            return SAMLAuthProvider
                        },
                        Z: function() {
                            return TwitterAuthProvider
                        },
                        _: function() {
                            return signInAnonymously
                        },
                        a: function() {
                            return k
                        },
                        a0: function() {
                            return linkWithCredential
                        },
                        a1: function() {
                            return reauthenticateWithCredential
                        },
                        a2: function() {
                            return signInWithCustomToken
                        },
                        a3: function() {
                            return sendPasswordResetEmail
                        },
                        a4: function() {
                            return confirmPasswordReset
                        },
                        a5: function() {
                            return applyActionCode
                        },
                        a6: function() {
                            return checkActionCode
                        },
                        a7: function() {
                            return verifyPasswordResetCode
                        },
                        a8: function() {
                            return createUserWithEmailAndPassword
                        },
                        a9: function() {
                            return signInWithEmailAndPassword
                        },
                        aa: function() {
                            return sendSignInLinkToEmail
                        },
                        ab: function() {
                            return isSignInWithEmailLink
                        },
                        ac: function() {
                            return signInWithEmailLink
                        },
                        ad: function() {
                            return fetchSignInMethodsForEmail
                        },
                        ae: function() {
                            return sendEmailVerification
                        },
                        af: function() {
                            return verifyBeforeUpdateEmail
                        },
                        ag: function() {
                            return ActionCodeURL
                        },
                        ah: function() {
                            return parseActionCodeURL
                        },
                        ai: function() {
                            return updateProfile
                        },
                        aj: function() {
                            return updateEmail
                        },
                        ak: function() {
                            return updatePassword
                        },
                        al: function() {
                            return getIdToken
                        },
                        am: function() {
                            return getIdTokenResult
                        },
                        an: function() {
                            return unlink
                        },
                        ao: function() {
                            return getAdditionalUserInfo
                        },
                        ap: function() {
                            return reload
                        },
                        aq: function() {
                            return getMultiFactorResolver
                        },
                        ar: function() {
                            return multiFactor
                        },
                        b: function() {
                            return R
                        },
                        c: function() {
                            return signInWithPopup
                        },
                        d: function() {
                            return linkWithPopup
                        },
                        e: function() {
                            return reauthenticateWithPopup
                        },
                        f: function() {
                            return signInWithRedirect
                        },
                        g: function() {
                            return linkWithRedirect
                        },
                        h: function() {
                            return reauthenticateWithRedirect
                        },
                        i: function() {
                            return b
                        },
                        j: function() {
                            return getRedirectResult
                        },
                        k: function() {
                            return $
                        },
                        l: function() {
                            return linkWithPhoneNumber
                        },
                        m: function() {
                            return PhoneMultiFactorGenerator
                        },
                        n: function() {
                            return TotpSecret
                        },
                        o: function() {
                            return getAuth
                        },
                        p: function() {
                            return c
                        },
                        q: function() {
                            return setPersistence
                        },
                        r: function() {
                            return reauthenticateWithPhoneNumber
                        },
                        s: function() {
                            return signInWithPhoneNumber
                        },
                        t: function() {
                            return initializeRecaptchaConfig
                        },
                        u: function() {
                            return updatePhoneNumber
                        },
                        v: function() {
                            return onIdTokenChanged
                        },
                        w: function() {
                            return beforeAuthStateChanged
                        },
                        x: function() {
                            return onAuthStateChanged
                        },
                        y: function() {
                            return useDeviceLanguage
                        },
                        z: function() {
                            return updateCurrentUser
                        }
                    });
                    var r, n = i(74444),
                        s = i(32238),
                        a = i(97582),
                        o = i(53333),
                        l = i(8463);
                    let u = {
                            PHONE: "phone",
                            TOTP: "totp"
                        },
                        c = {
                            FACEBOOK: "facebook.com",
                            GITHUB: "github.com",
                            GOOGLE: "google.com",
                            PASSWORD: "password",
                            PHONE: "phone",
                            TWITTER: "twitter.com"
                        },
                        d = {
                            EMAIL_LINK: "emailLink",
                            EMAIL_PASSWORD: "password",
                            FACEBOOK: "facebook.com",
                            GITHUB: "github.com",
                            GOOGLE: "google.com",
                            PHONE: "phone",
                            TWITTER: "twitter.com"
                        },
                        h = {
                            LINK: "link",
                            REAUTHENTICATE: "reauthenticate",
                            SIGN_IN: "signIn"
                        },
                        p = {
                            EMAIL_SIGNIN: "EMAIL_SIGNIN",
                            PASSWORD_RESET: "PASSWORD_RESET",
                            RECOVER_EMAIL: "RECOVER_EMAIL",
                            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
                            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
                            VERIFY_EMAIL: "VERIFY_EMAIL"
                        };

                    function _prodErrorMap() {
                        return {
                            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                        }
                    }
                    let debugErrorMap = function() {
                            return {
                                "admin-restricted-operation": "This operation is restricted to administrators only.",
                                "argument-error": "",
                                "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                                "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                                "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                                "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                                "cordova-not-ready": "Cordova framework is not ready.",
                                "cors-unsupported": "This browser is not supported.",
                                "credential-already-in-use": "This credential is already associated with a different user account.",
                                "custom-token-mismatch": "The custom token corresponds to a different audience.",
                                "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
                                "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                                "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                                "email-already-in-use": "The email address is already in use by another account.",
                                "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
                                "expired-action-code": "The action code has expired.",
                                "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                                "internal-error": "An internal AuthError has occurred.",
                                "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                                "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                                "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                                "invalid-auth-event": "An internal AuthError has occurred.",
                                "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
                                "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                                "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                                "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                                "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                                "invalid-email": "The email address is badly formatted.",
                                "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
                                "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                                "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                                "invalid-credential": "The supplied auth credential is malformed or has expired.",
                                "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                                "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                                "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                                "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                                "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                                "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                                "wrong-password": "The password is invalid or the user does not have a password.",
                                "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                                "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                                "invalid-provider-id": "The specified provider ID is invalid.",
                                "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                                "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                                "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                                "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                                "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
                                "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                                "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                                "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                                "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                                "missing-continue-uri": "A continue URL must be provided in the request.",
                                "missing-iframe-start": "An internal AuthError has occurred.",
                                "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                                "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                                "missing-password": "A non-empty password must be provided",
                                "missing-multi-factor-info": "No second factor identifier is provided.",
                                "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                                "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                                "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                                "app-deleted": "This instance of FirebaseApp has been deleted.",
                                "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                                "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                                "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                                "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
                                "no-auth-event": "An internal AuthError has occurred.",
                                "no-such-provider": "User was not linked to an account with the given provider.",
                                "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                                "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                                "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                                "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                                "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                                "provider-already-linked": "User can only be linked to one identity for the given provider.",
                                "quota-exceeded": "The project's quota for this operation has been exceeded.",
                                "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                                "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                                "rejected-credential": "The request contains malformed or mismatching credentials.",
                                "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                                "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                                "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                                timeout: "The operation has timed out.",
                                "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                                "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                                "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                                "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                                "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                                "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                                "unverified-email": "The operation requires a verified email.",
                                "user-cancelled": "The user did not grant your application the permissions it requested.",
                                "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                                "user-disabled": "The user account has been disabled by an administrator.",
                                "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                                "user-signed-out": "",
                                "weak-password": "The password must be 6 characters long or more.",
                                "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
                                "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
                                "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.",
                                "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.",
                                "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.",
                                "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.",
                                "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.",
                                "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.",
                                "invalid-req-type": "Invalid request parameters.",
                                "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend."
                            }
                        },
                        m = _prodErrorMap,
                        f = new n.LL("auth", "Firebase", _prodErrorMap()),
                        g = {
                            ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
                            ARGUMENT_ERROR: "auth/argument-error",
                            APP_NOT_AUTHORIZED: "auth/app-not-authorized",
                            APP_NOT_INSTALLED: "auth/app-not-installed",
                            CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
                            CODE_EXPIRED: "auth/code-expired",
                            CORDOVA_NOT_READY: "auth/cordova-not-ready",
                            CORS_UNSUPPORTED: "auth/cors-unsupported",
                            CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
                            CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
                            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
                            DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
                            DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
                            EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
                            EMAIL_EXISTS: "auth/email-already-in-use",
                            EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
                            EXPIRED_OOB_CODE: "auth/expired-action-code",
                            EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
                            INTERNAL_ERROR: "auth/internal-error",
                            INVALID_API_KEY: "auth/invalid-api-key",
                            INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
                            INVALID_APP_ID: "auth/invalid-app-id",
                            INVALID_AUTH: "auth/invalid-user-token",
                            INVALID_AUTH_EVENT: "auth/invalid-auth-event",
                            INVALID_CERT_HASH: "auth/invalid-cert-hash",
                            INVALID_CODE: "auth/invalid-verification-code",
                            INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
                            INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
                            INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
                            INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
                            INVALID_EMAIL: "auth/invalid-email",
                            INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
                            INVALID_IDP_RESPONSE: "auth/invalid-credential",
                            INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
                            INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
                            INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
                            INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
                            INVALID_OOB_CODE: "auth/invalid-action-code",
                            INVALID_ORIGIN: "auth/unauthorized-domain",
                            INVALID_PASSWORD: "auth/wrong-password",
                            INVALID_PERSISTENCE: "auth/invalid-persistence-type",
                            INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
                            INVALID_PROVIDER_ID: "auth/invalid-provider-id",
                            INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
                            INVALID_SENDER: "auth/invalid-sender",
                            INVALID_SESSION_INFO: "auth/invalid-verification-id",
                            INVALID_TENANT_ID: "auth/invalid-tenant-id",
                            MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
                            MFA_REQUIRED: "auth/multi-factor-auth-required",
                            MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
                            MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
                            MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
                            MISSING_CODE: "auth/missing-verification-code",
                            MISSING_CONTINUE_URI: "auth/missing-continue-uri",
                            MISSING_IFRAME_START: "auth/missing-iframe-start",
                            MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
                            MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
                            MISSING_MFA_INFO: "auth/missing-multi-factor-info",
                            MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
                            MISSING_PHONE_NUMBER: "auth/missing-phone-number",
                            MISSING_SESSION_INFO: "auth/missing-verification-id",
                            MODULE_DESTROYED: "auth/app-deleted",
                            NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
                            NETWORK_REQUEST_FAILED: "auth/network-request-failed",
                            NULL_USER: "auth/null-user",
                            NO_AUTH_EVENT: "auth/no-auth-event",
                            NO_SUCH_PROVIDER: "auth/no-such-provider",
                            OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
                            OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
                            POPUP_BLOCKED: "auth/popup-blocked",
                            POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
                            PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
                            QUOTA_EXCEEDED: "auth/quota-exceeded",
                            REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
                            REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
                            REJECTED_CREDENTIAL: "auth/rejected-credential",
                            SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
                            SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
                            TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
                            TIMEOUT: "auth/timeout",
                            TOKEN_EXPIRED: "auth/user-token-expired",
                            TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
                            UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
                            UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
                            UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
                            UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
                            UNVERIFIED_EMAIL: "auth/unverified-email",
                            USER_CANCELLED: "auth/user-cancelled",
                            USER_DELETED: "auth/user-not-found",
                            USER_DISABLED: "auth/user-disabled",
                            USER_MISMATCH: "auth/user-mismatch",
                            USER_SIGNED_OUT: "auth/user-signed-out",
                            WEAK_PASSWORD: "auth/weak-password",
                            WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
                            ALREADY_INITIALIZED: "auth/already-initialized",
                            RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
                            MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
                            INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
                            INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
                            MISSING_CLIENT_TYPE: "auth/missing-client-type",
                            MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
                            INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
                            INVALID_REQ_TYPE: "auth/invalid-req-type"
                        },
                        _ = new o.Yd("@firebase/auth");

                    function _logError(e, ...t) {
                        _.logLevel <= o.in.ERROR && _.error(`Auth (${s.Jn}): ${e}`, ...t)
                    }

                    function _fail(e, ...t) {
                        throw createErrorInternal(e, ...t)
                    }

                    function _createError(e, ...t) {
                        return createErrorInternal(e, ...t)
                    }

                    function _errorWithCustomMessage(e, t, i) {
                        let r = Object.assign(Object.assign({}, m()), {
                                [t]: i
                            }),
                            s = new n.LL("auth", "Firebase", r);
                        return s.create(t, {
                            appName: e.name
                        })
                    }

                    function _assertInstanceOf(e, t, i) {
                        if (!(t instanceof i)) throw i.name !== t.constructor.name && _fail(e, "argument-error"), _errorWithCustomMessage(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
                    }

                    function createErrorInternal(e, ...t) {
                        if ("string" != typeof e) {
                            let i = t[0],
                                r = [...t.slice(1)];
                            return r[0] && (r[0].appName = e.name), e._errorFactory.create(i, ...r)
                        }
                        return f.create(e, ...t)
                    }

                    function _assert(e, t, ...i) {
                        if (!e) throw createErrorInternal(t, ...i)
                    }

                    function debugFail(e) {
                        let t = "INTERNAL ASSERTION FAILED: " + e;
                        throw _logError(t), Error(t)
                    }

                    function _getCurrentUrl() {
                        var e;
                        return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
                    }

                    function _isHttpOrHttps() {
                        return "http:" === _getCurrentScheme() || "https:" === _getCurrentScheme()
                    }

                    function _getCurrentScheme() {
                        var e;
                        return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
                    }
                    let Delay = class Delay {
                        constructor(e, t) {
                            this.shortDelay = e, this.longDelay = t, t > e || debugFail("Short delay should be less than long delay!"), this.isMobile = (0, n.uI)() || (0, n.b$)()
                        }
                        get() {
                            return !("undefined" != typeof navigator && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine && (_isHttpOrHttps() || (0, n.ru)() || "connection" in navigator)) || navigator.onLine ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
                        }
                    };

                    function _emulatorUrl(e, t) {
                        e.emulator || debugFail("Emulator should always be set here");
                        let {
                            url: i
                        } = e.emulator;
                        return t ? `${i}${t.startsWith("/")?t.slice(1):t}` : i
                    }
                    let FetchProvider = class FetchProvider {
                        static initialize(e, t, i) {
                            this.fetchImpl = e, t && (this.headersImpl = t), i && (this.responseImpl = i)
                        }
                        static fetch() {
                            return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : void debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                        }
                        static headers() {
                            return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers : void debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                        }
                        static response() {
                            return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response : void debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                        }
                    };
                    let I = {
                            CREDENTIAL_MISMATCH: "custom-token-mismatch",
                            MISSING_CUSTOM_TOKEN: "internal-error",
                            INVALID_IDENTIFIER: "invalid-email",
                            MISSING_CONTINUE_URI: "internal-error",
                            INVALID_PASSWORD: "wrong-password",
                            MISSING_PASSWORD: "missing-password",
                            EMAIL_EXISTS: "email-already-in-use",
                            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                            INVALID_IDP_RESPONSE: "invalid-credential",
                            INVALID_PENDING_TOKEN: "invalid-credential",
                            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                            MISSING_REQ_TYPE: "internal-error",
                            EMAIL_NOT_FOUND: "user-not-found",
                            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                            EXPIRED_OOB_CODE: "expired-action-code",
                            INVALID_OOB_CODE: "invalid-action-code",
                            MISSING_OOB_CODE: "internal-error",
                            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                            INVALID_ID_TOKEN: "invalid-user-token",
                            TOKEN_EXPIRED: "user-token-expired",
                            USER_NOT_FOUND: "user-token-expired",
                            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                            INVALID_CODE: "invalid-verification-code",
                            INVALID_SESSION_INFO: "invalid-verification-id",
                            INVALID_TEMPORARY_PROOF: "invalid-credential",
                            MISSING_SESSION_INFO: "missing-verification-id",
                            SESSION_EXPIRED: "code-expired",
                            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                            BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
                            RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
                            MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
                            INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
                            INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
                            MISSING_CLIENT_TYPE: "missing-client-type",
                            MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
                            INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
                            INVALID_REQ_TYPE: "invalid-req-type"
                        },
                        v = new Delay(3e4, 6e4);

                    function _addTidIfNecessary(e, t) {
                        return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
                            tenantId: e.tenantId
                        }) : t
                    }
                    async function _performApiRequest(e, t, i, r, s = {}) {
                        return _performFetchWithErrorHandling(e, s, async () => {
                            let s = {},
                                a = {};
                            r && ("GET" === t ? a = r : s = {
                                body: JSON.stringify(r)
                            });
                            let o = (0, n.xO)(Object.assign({
                                    key: e.config.apiKey
                                }, a)).slice(1),
                                l = await e._getAdditionalHeaders();
                            return l["Content-Type"] = "application/json", e.languageCode && (l["X-Firebase-Locale"] = e.languageCode), FetchProvider.fetch()(_getFinalTarget(e, e.config.apiHost, i, o), Object.assign({
                                method: t,
                                headers: l,
                                referrerPolicy: "no-referrer"
                            }, s))
                        })
                    }
                    async function _performFetchWithErrorHandling(e, t, i) {
                        e._canInitEmulator = !1;
                        let r = Object.assign(Object.assign({}, I), t);
                        try {
                            let t = new NetworkTimeout(e),
                                n = await Promise.race([i(), t.promise]);
                            t.clearNetworkTimeout();
                            let s = await n.json();
                            if ("needConfirmation" in s) throw _makeTaggedError(e, "account-exists-with-different-credential", s);
                            if (n.ok && !("errorMessage" in s)) return s; {
                                let t = n.ok ? s.errorMessage : s.error.message,
                                    [i, a] = t.split(" : ");
                                if ("FEDERATED_USER_ID_ALREADY_LINKED" === i) throw _makeTaggedError(e, "credential-already-in-use", s);
                                if ("EMAIL_EXISTS" === i) throw _makeTaggedError(e, "email-already-in-use", s);
                                if ("USER_DISABLED" === i) throw _makeTaggedError(e, "user-disabled", s);
                                let o = r[i] || i.toLowerCase().replace(/[_\s]+/g, "-");
                                if (a) throw _errorWithCustomMessage(e, o, a);
                                _fail(e, o)
                            }
                        } catch (t) {
                            if (t instanceof n.ZR) throw t;
                            _fail(e, "network-request-failed", {
                                message: String(t)
                            })
                        }
                    }
                    async function _performSignInRequest(e, t, i, r, n = {}) {
                        let s = await _performApiRequest(e, t, i, r, n);
                        return "mfaPendingCredential" in s && _fail(e, "multi-factor-auth-required", {
                            _serverResponse: s
                        }), s
                    }

                    function _getFinalTarget(e, t, i, r) {
                        let n = `${t}${i}?${r}`;
                        return e.config.emulator ? _emulatorUrl(e.config, n) : `${e.config.apiScheme}://${n}`
                    }
                    let NetworkTimeout = class NetworkTimeout {
                        constructor(e) {
                            this.auth = e, this.timer = null, this.promise = new Promise((e, t) => {
                                this.timer = setTimeout(() => t(_createError(this.auth, "network-request-failed")), v.get())
                            })
                        }
                        clearNetworkTimeout() {
                            clearTimeout(this.timer)
                        }
                    };

                    function _makeTaggedError(e, t, i) {
                        let r = {
                            appName: e.name
                        };
                        i.email && (r.email = i.email), i.phoneNumber && (r.phoneNumber = i.phoneNumber);
                        let n = _createError(e, t, r);
                        return n.customData._tokenResponse = i, n
                    }
                    async function deleteAccount(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:delete", t)
                    }
                    async function deleteLinkedAccounts(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:update", t)
                    }
                    async function getAccountInfo(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:lookup", t)
                    }

                    function utcTimestampToDateString(e) {
                        if (e) try {
                            let t = new Date(Number(e));
                            if (!isNaN(t.getTime())) return t.toUTCString()
                        } catch (e) {}
                    }

                    function getIdToken(e, t = !1) {
                        return (0, n.m9)(e).getIdToken(t)
                    }
                    async function getIdTokenResult(e, t = !1) {
                        let i = (0, n.m9)(e),
                            r = await i.getIdToken(t),
                            s = _parseToken(r);
                        _assert(s && s.exp && s.auth_time && s.iat, i.auth, "internal-error");
                        let a = "object" == typeof s.firebase ? s.firebase : void 0,
                            o = null == a ? void 0 : a.sign_in_provider;
                        return {
                            claims: s,
                            token: r,
                            authTime: utcTimestampToDateString(secondsStringToMilliseconds(s.auth_time)),
                            issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(s.iat)),
                            expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(s.exp)),
                            signInProvider: o || null,
                            signInSecondFactor: (null == a ? void 0 : a.sign_in_second_factor) || null
                        }
                    }

                    function secondsStringToMilliseconds(e) {
                        return 1e3 * Number(e)
                    }

                    function _parseToken(e) {
                        let [t, i, r] = e.split(".");
                        if (void 0 === t || void 0 === i || void 0 === r) return _logError("JWT malformed, contained fewer than 3 sections"), null;
                        try {
                            let e = (0, n.tV)(i);
                            if (!e) return _logError("Failed to decode base64 JWT payload"), null;
                            return JSON.parse(e)
                        } catch (e) {
                            return _logError("Caught error parsing JWT payload as JSON", null == e ? void 0 : e.toString()), null
                        }
                    }
                    async function _logoutIfInvalidated(e, t, i = !1) {
                        if (i) return t;
                        try {
                            return await t
                        } catch (t) {
                            throw t instanceof n.ZR && function({
                                code: e
                            }) {
                                return "auth/user-disabled" === e || "auth/user-token-expired" === e
                            }(t) && e.auth.currentUser === e && await e.auth.signOut(), t
                        }
                    }
                    let ProactiveRefresh = class ProactiveRefresh {
                        constructor(e) {
                            this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
                        }
                        _start() {
                            this.isRunning || (this.isRunning = !0, this.schedule())
                        }
                        _stop() {
                            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
                        }
                        getInterval(e) {
                            var t;
                            if (e) {
                                let e = this.errorBackoff;
                                return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e
                            } {
                                this.errorBackoff = 3e4;
                                let e = null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0,
                                    i = e - Date.now() - 3e5;
                                return Math.max(0, i)
                            }
                        }
                        schedule(e = !1) {
                            if (!this.isRunning) return;
                            let t = this.getInterval(e);
                            this.timerId = setTimeout(async () => {
                                await this.iteration()
                            }, t)
                        }
                        async iteration() {
                            try {
                                await this.user.getIdToken(!0)
                            } catch (e) {
                                (null == e ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
                                return
                            }
                            this.schedule()
                        }
                    };
                    let UserMetadata = class UserMetadata {
                        constructor(e, t) {
                            this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
                        }
                        _initializeTime() {
                            this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt), this.creationTime = utcTimestampToDateString(this.createdAt)
                        }
                        _copy(e) {
                            this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
                        }
                        toJSON() {
                            return {
                                createdAt: this.createdAt,
                                lastLoginAt: this.lastLoginAt
                            }
                        }
                    };
                    async function _reloadWithoutSaving(e) {
                        var t;
                        let i = e.auth,
                            r = await e.getIdToken(),
                            n = await _logoutIfInvalidated(e, getAccountInfo(i, {
                                idToken: r
                            }));
                        _assert(null == n ? void 0 : n.users.length, i, "internal-error");
                        let s = n.users[0];
                        e._notifyReloadListener(s);
                        let o = (null === (t = s.providerUserInfo) || void 0 === t ? void 0 : t.length) ? s.providerUserInfo.map(e => {
                                var {
                                    providerId: t
                                } = e, i = (0, a._T)(e, ["providerId"]);
                                return {
                                    providerId: t,
                                    uid: i.rawId || "",
                                    displayName: i.displayName || null,
                                    email: i.email || null,
                                    phoneNumber: i.phoneNumber || null,
                                    photoURL: i.photoUrl || null
                                }
                            }) : [],
                            l = function(e, t) {
                                let i = e.filter(e => !t.some(t => t.providerId === e.providerId));
                                return [...i, ...t]
                            }(e.providerData, o),
                            u = e.isAnonymous,
                            c = !(e.email && s.passwordHash) && !(null == l ? void 0 : l.length),
                            d = {
                                uid: s.localId,
                                displayName: s.displayName || null,
                                photoURL: s.photoUrl || null,
                                email: s.email || null,
                                emailVerified: s.emailVerified || !1,
                                phoneNumber: s.phoneNumber || null,
                                tenantId: s.tenantId || null,
                                providerData: l,
                                metadata: new UserMetadata(s.createdAt, s.lastLoginAt),
                                isAnonymous: !!u && c
                            };
                        Object.assign(e, d)
                    }
                    async function reload(e) {
                        let t = (0, n.m9)(e);
                        await _reloadWithoutSaving(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
                    }
                    async function requestStsToken(e, t) {
                        let i = await _performFetchWithErrorHandling(e, {}, async () => {
                            let i = (0, n.xO)({
                                    grant_type: "refresh_token",
                                    refresh_token: t
                                }).slice(1),
                                {
                                    tokenApiHost: r,
                                    apiKey: s
                                } = e.config,
                                a = _getFinalTarget(e, r, "/v1/token", `key=${s}`),
                                o = await e._getAdditionalHeaders();
                            return o["Content-Type"] = "application/x-www-form-urlencoded", FetchProvider.fetch()(a, {
                                method: "POST",
                                headers: o,
                                body: i
                            })
                        });
                        return {
                            accessToken: i.access_token,
                            expiresIn: i.expires_in,
                            refreshToken: i.refresh_token
                        }
                    }
                    let StsTokenManager = class StsTokenManager {
                        constructor() {
                            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
                        }
                        get isExpired() {
                            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
                        }
                        updateFromServerResponse(e) {
                            _assert(e.idToken, "internal-error"), _assert(void 0 !== e.idToken, "internal-error"), _assert(void 0 !== e.refreshToken, "internal-error");
                            let t = "expiresIn" in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : function(e) {
                                let t = _parseToken(e);
                                return _assert(t, "internal-error"), _assert(void 0 !== t.exp, "internal-error"), _assert(void 0 !== t.iat, "internal-error"), Number(t.exp) - Number(t.iat)
                            }(e.idToken);
                            this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
                        }
                        async getToken(e, t = !1) {
                            return (_assert(!this.accessToken || this.refreshToken, e, "user-token-expired"), t || !this.accessToken || this.isExpired) ? this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken
                        }
                        clearRefreshToken() {
                            this.refreshToken = null
                        }
                        async refresh(e, t) {
                            let {
                                accessToken: i,
                                refreshToken: r,
                                expiresIn: n
                            } = await requestStsToken(e, t);
                            this.updateTokensAndExpiration(i, r, Number(n))
                        }
                        updateTokensAndExpiration(e, t, i) {
                            this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * i
                        }
                        static fromJSON(e, t) {
                            let {
                                refreshToken: i,
                                accessToken: r,
                                expirationTime: n
                            } = t, s = new StsTokenManager;
                            return i && (_assert("string" == typeof i, "internal-error", {
                                appName: e
                            }), s.refreshToken = i), r && (_assert("string" == typeof r, "internal-error", {
                                appName: e
                            }), s.accessToken = r), n && (_assert("number" == typeof n, "internal-error", {
                                appName: e
                            }), s.expirationTime = n), s
                        }
                        toJSON() {
                            return {
                                refreshToken: this.refreshToken,
                                accessToken: this.accessToken,
                                expirationTime: this.expirationTime
                            }
                        }
                        _assign(e) {
                            this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
                        }
                        _clone() {
                            return Object.assign(new StsTokenManager, this.toJSON())
                        }
                        _performRefresh() {
                            return debugFail("not implemented")
                        }
                    };

                    function assertStringOrUndefined(e, t) {
                        _assert("string" == typeof e || void 0 === e, "internal-error", {
                            appName: t
                        })
                    }
                    let UserImpl = class UserImpl {
                        constructor(e) {
                            var {
                                uid: t,
                                auth: i,
                                stsTokenManager: r
                            } = e, n = (0, a._T)(e, ["uid", "auth", "stsTokenManager"]);
                            this.providerId = "firebase", this.proactiveRefresh = new ProactiveRefresh(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = i, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = n.displayName || null, this.email = n.email || null, this.emailVerified = n.emailVerified || !1, this.phoneNumber = n.phoneNumber || null, this.photoURL = n.photoURL || null, this.isAnonymous = n.isAnonymous || !1, this.tenantId = n.tenantId || null, this.providerData = n.providerData ? [...n.providerData] : [], this.metadata = new UserMetadata(n.createdAt || void 0, n.lastLoginAt || void 0)
                        }
                        async getIdToken(e) {
                            let t = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, e));
                            return _assert(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
                        }
                        getIdTokenResult(e) {
                            return getIdTokenResult(this, e)
                        }
                        reload() {
                            return reload(this)
                        }
                        _assign(e) {
                            this !== e && (_assert(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(e => Object.assign({}, e)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
                        }
                        _clone(e) {
                            let t = new UserImpl(Object.assign(Object.assign({}, this), {
                                auth: e,
                                stsTokenManager: this.stsTokenManager._clone()
                            }));
                            return t.metadata._copy(this.metadata), t
                        }
                        _onReload(e) {
                            _assert(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
                        }
                        _notifyReloadListener(e) {
                            this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
                        }
                        _startProactiveRefresh() {
                            this.proactiveRefresh._start()
                        }
                        _stopProactiveRefresh() {
                            this.proactiveRefresh._stop()
                        }
                        async _updateTokensIfNecessary(e, t = !1) {
                            let i = !1;
                            e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), i = !0), t && await _reloadWithoutSaving(this), await this.auth._persistUserIfCurrent(this), i && this.auth._notifyListenersIfCurrent(this)
                        }
                        async delete() {
                            let e = await this.getIdToken();
                            return await _logoutIfInvalidated(this, deleteAccount(this.auth, {
                                idToken: e
                            })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
                        }
                        toJSON() {
                            return Object.assign(Object.assign({
                                uid: this.uid,
                                email: this.email || void 0,
                                emailVerified: this.emailVerified,
                                displayName: this.displayName || void 0,
                                isAnonymous: this.isAnonymous,
                                photoURL: this.photoURL || void 0,
                                phoneNumber: this.phoneNumber || void 0,
                                tenantId: this.tenantId || void 0,
                                providerData: this.providerData.map(e => Object.assign({}, e)),
                                stsTokenManager: this.stsTokenManager.toJSON(),
                                _redirectEventId: this._redirectEventId
                            }, this.metadata.toJSON()), {
                                apiKey: this.auth.config.apiKey,
                                appName: this.auth.name
                            })
                        }
                        get refreshToken() {
                            return this.stsTokenManager.refreshToken || ""
                        }
                        static _fromJSON(e, t) {
                            var i, r, n, s, a, o, l, u;
                            let c = null !== (i = t.displayName) && void 0 !== i ? i : void 0,
                                d = null !== (r = t.email) && void 0 !== r ? r : void 0,
                                h = null !== (n = t.phoneNumber) && void 0 !== n ? n : void 0,
                                p = null !== (s = t.photoURL) && void 0 !== s ? s : void 0,
                                m = null !== (a = t.tenantId) && void 0 !== a ? a : void 0,
                                f = null !== (o = t._redirectEventId) && void 0 !== o ? o : void 0,
                                g = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
                                _ = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
                                {
                                    uid: I,
                                    emailVerified: v,
                                    isAnonymous: T,
                                    providerData: A,
                                    stsTokenManager: w
                                } = t;
                            _assert(I && w, e, "internal-error");
                            let E = StsTokenManager.fromJSON(this.name, w);
                            _assert("string" == typeof I, e, "internal-error"), assertStringOrUndefined(c, e.name), assertStringOrUndefined(d, e.name), _assert("boolean" == typeof v, e, "internal-error"), _assert("boolean" == typeof T, e, "internal-error"), assertStringOrUndefined(h, e.name), assertStringOrUndefined(p, e.name), assertStringOrUndefined(m, e.name), assertStringOrUndefined(f, e.name), assertStringOrUndefined(g, e.name), assertStringOrUndefined(_, e.name);
                            let y = new UserImpl({
                                uid: I,
                                auth: e,
                                email: d,
                                emailVerified: v,
                                displayName: c,
                                isAnonymous: T,
                                photoURL: p,
                                phoneNumber: h,
                                tenantId: m,
                                stsTokenManager: E,
                                createdAt: g,
                                lastLoginAt: _
                            });
                            return A && Array.isArray(A) && (y.providerData = A.map(e => Object.assign({}, e))), f && (y._redirectEventId = f), y
                        }
                        static async _fromIdTokenResponse(e, t, i = !1) {
                            let r = new StsTokenManager;
                            r.updateFromServerResponse(t);
                            let n = new UserImpl({
                                uid: t.localId,
                                auth: e,
                                stsTokenManager: r,
                                isAnonymous: i
                            });
                            return await _reloadWithoutSaving(n), n
                        }
                    };
                    let T = new Map;

                    function _getInstance(e) {
                        e instanceof Function || debugFail("Expected a class definition");
                        let t = T.get(e);
                        return t ? t instanceof e || debugFail("Instance stored in cache mismatched with class") : (t = new e, T.set(e, t)), t
                    }
                    let InMemoryPersistence = class InMemoryPersistence {
                        constructor() {
                            this.type = "NONE", this.storage = {}
                        }
                        async _isAvailable() {
                            return !0
                        }
                        async _set(e, t) {
                            this.storage[e] = t
                        }
                        async _get(e) {
                            let t = this.storage[e];
                            return void 0 === t ? null : t
                        }
                        async _remove(e) {
                            delete this.storage[e]
                        }
                        _addListener(e, t) {}
                        _removeListener(e, t) {}
                    };
                    InMemoryPersistence.type = "NONE";
                    let A = InMemoryPersistence;

                    function _persistenceKeyName(e, t, i) {
                        return `firebase:${e}:${t}:${i}`
                    }
                    let PersistenceUserManager = class PersistenceUserManager {
                        constructor(e, t, i) {
                            this.persistence = e, this.auth = t, this.userKey = i;
                            let {
                                config: r,
                                name: n
                            } = this.auth;
                            this.fullUserKey = _persistenceKeyName(this.userKey, r.apiKey, n), this.fullPersistenceKey = _persistenceKeyName("persistence", r.apiKey, n), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
                        }
                        setCurrentUser(e) {
                            return this.persistence._set(this.fullUserKey, e.toJSON())
                        }
                        async getCurrentUser() {
                            let e = await this.persistence._get(this.fullUserKey);
                            return e ? UserImpl._fromJSON(this.auth, e) : null
                        }
                        removeCurrentUser() {
                            return this.persistence._remove(this.fullUserKey)
                        }
                        savePersistenceForRedirect() {
                            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
                        }
                        async setPersistence(e) {
                            if (this.persistence === e) return;
                            let t = await this.getCurrentUser();
                            if (await this.removeCurrentUser(), this.persistence = e, t) return this.setCurrentUser(t)
                        }
                        delete() {
                            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
                        }
                        static async create(e, t, i = "authUser") {
                            if (!t.length) return new PersistenceUserManager(_getInstance(A), e, i);
                            let r = (await Promise.all(t.map(async e => {
                                    if (await e._isAvailable()) return e
                                }))).filter(e => e),
                                n = r[0] || _getInstance(A),
                                s = _persistenceKeyName(i, e.config.apiKey, e.name),
                                a = null;
                            for (let i of t) try {
                                let t = await i._get(s);
                                if (t) {
                                    let r = UserImpl._fromJSON(e, t);
                                    i !== n && (a = r), n = i;
                                    break
                                }
                            } catch (e) {}
                            let o = r.filter(e => e._shouldAllowMigration);
                            return n._shouldAllowMigration && o.length && (n = o[0], a && await n._set(s, a.toJSON()), await Promise.all(t.map(async e => {
                                if (e !== n) try {
                                    await e._remove(s)
                                } catch (e) {}
                            }))), new PersistenceUserManager(n, e, i)
                        }
                    };

                    function _getBrowserName(e) {
                        let t = e.toLowerCase();
                        if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
                        if (_isIEMobile(t)) return "IEMobile";
                        if (t.includes("msie") || t.includes("trident/")) return "IE"; {
                            if (t.includes("edge/")) return "Edge";
                            if (_isFirefox(t)) return "Firefox";
                            if (t.includes("silk/")) return "Silk";
                            if (_isBlackBerry(t)) return "Blackberry";
                            if (_isWebOS(t)) return "Webos";
                            if (_isSafari(t)) return "Safari";
                            if ((t.includes("chrome/") || _isChromeIOS(t)) && !t.includes("edge/")) return "Chrome";
                            if (_isAndroid(t)) return "Android";
                            let i = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
                            if ((null == i ? void 0 : i.length) === 2) return i[1]
                        }
                        return "Other"
                    }

                    function _isFirefox(e = (0, n.z$)()) {
                        return /firefox\//i.test(e)
                    }

                    function _isSafari(e = (0, n.z$)()) {
                        let t = e.toLowerCase();
                        return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
                    }

                    function _isChromeIOS(e = (0, n.z$)()) {
                        return /crios\//i.test(e)
                    }

                    function _isIEMobile(e = (0, n.z$)()) {
                        return /iemobile/i.test(e)
                    }

                    function _isAndroid(e = (0, n.z$)()) {
                        return /android/i.test(e)
                    }

                    function _isBlackBerry(e = (0, n.z$)()) {
                        return /blackberry/i.test(e)
                    }

                    function _isWebOS(e = (0, n.z$)()) {
                        return /webos/i.test(e)
                    }

                    function _isIOS(e = (0, n.z$)()) {
                        return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
                    }

                    function _isMobileBrowser(e = (0, n.z$)()) {
                        return _isIOS(e) || _isAndroid(e) || _isWebOS(e) || _isBlackBerry(e) || /windows phone/i.test(e) || _isIEMobile(e)
                    }

                    function _getClientVersion(e, t = []) {
                        let i;
                        switch (e) {
                            case "Browser":
                                i = _getBrowserName((0, n.z$)());
                                break;
                            case "Worker":
                                i = `${_getBrowserName((0,n.z$)())}-${e}`;
                                break;
                            default:
                                i = e
                        }
                        let r = t.length ? t.join(",") : "FirebaseCore-web";
                        return `${i}/JsCore/${s.Jn}/${r}`
                    }
                    async function getRecaptchaParams(e) {
                        return (await _performApiRequest(e, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
                    }
                    async function getRecaptchaConfig(e, t) {
                        return _performApiRequest(e, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(e, t))
                    }

                    function isV2(e) {
                        return void 0 !== e && void 0 !== e.getResponse
                    }

                    function isEnterprise(e) {
                        return void 0 !== e && void 0 !== e.enterprise
                    }
                    let RecaptchaConfig = class RecaptchaConfig {
                        constructor(e) {
                            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === e.recaptchaKey) throw Error("recaptchaKey undefined");
                            this.siteKey = e.recaptchaKey.split("/")[3], this.emailPasswordEnabled = e.recaptchaEnforcementState.some(e => "EMAIL_PASSWORD_PROVIDER" === e.provider && "OFF" !== e.enforcementState)
                        }
                    };

                    function _loadJS(e) {
                        return new Promise((t, i) => {
                            var r, n;
                            let s = document.createElement("script");
                            s.setAttribute("src", e), s.onload = t, s.onerror = e => {
                                let t = _createError("internal-error");
                                t.customData = e, i(t)
                            }, s.type = "text/javascript", s.charset = "UTF-8", (null !== (n = null === (r = document.getElementsByTagName("head")) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : document).appendChild(s)
                        })
                    }

                    function _generateCallbackName(e) {
                        return `__${e}${Math.floor(1e6*Math.random())}`
                    }
                    let RecaptchaEnterpriseVerifier = class RecaptchaEnterpriseVerifier {
                        constructor(e) {
                            this.type = "recaptcha-enterprise", this.auth = _castAuth(e)
                        }
                        async verify(e = "verify", t = !1) {
                            async function retrieveSiteKey(e) {
                                if (!t) {
                                    if (null == e.tenantId && null != e._agentRecaptchaConfig) return e._agentRecaptchaConfig.siteKey;
                                    if (null != e.tenantId && void 0 !== e._tenantRecaptchaConfigs[e.tenantId]) return e._tenantRecaptchaConfigs[e.tenantId].siteKey
                                }
                                return new Promise(async (t, i) => {
                                    getRecaptchaConfig(e, {
                                        clientType: "CLIENT_TYPE_WEB",
                                        version: "RECAPTCHA_ENTERPRISE"
                                    }).then(r => {
                                        if (void 0 === r.recaptchaKey) i(Error("recaptcha Enterprise site key undefined"));
                                        else {
                                            let i = new RecaptchaConfig(r);
                                            return null == e.tenantId ? e._agentRecaptchaConfig = i : e._tenantRecaptchaConfigs[e.tenantId] = i, t(i.siteKey)
                                        }
                                    }).catch(e => {
                                        i(e)
                                    })
                                })
                            }

                            function retrieveRecaptchaToken(t, i, r) {
                                let n = window.grecaptcha;
                                isEnterprise(n) ? n.enterprise.ready(() => {
                                    n.enterprise.execute(t, {
                                        action: e
                                    }).then(e => {
                                        i(e)
                                    }).catch(() => {
                                        i("NO_RECAPTCHA")
                                    })
                                }) : r(Error("No reCAPTCHA enterprise script loaded."))
                            }
                            return new Promise((e, i) => {
                                retrieveSiteKey(this.auth).then(r => {
                                    if (!t && isEnterprise(window.grecaptcha)) retrieveRecaptchaToken(r, e, i);
                                    else {
                                        if ("undefined" == typeof window) {
                                            i(Error("RecaptchaVerifier is only supported in browser"));
                                            return
                                        }
                                        _loadJS("https://www.google.com/recaptcha/enterprise.js?render=" + r).then(() => {
                                            retrieveRecaptchaToken(r, e, i)
                                        }).catch(e => {
                                            i(e)
                                        })
                                    }
                                }).catch(e => {
                                    i(e)
                                })
                            })
                        }
                    };
                    async function injectRecaptchaFields(e, t, i, r = !1) {
                        let n;
                        let s = new RecaptchaEnterpriseVerifier(e);
                        try {
                            n = await s.verify(i)
                        } catch (e) {
                            n = await s.verify(i, !0)
                        }
                        let a = Object.assign({}, t);
                        return r ? Object.assign(a, {
                            captchaResp: n
                        }) : Object.assign(a, {
                            captchaResponse: n
                        }), Object.assign(a, {
                            clientType: "CLIENT_TYPE_WEB"
                        }), Object.assign(a, {
                            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                        }), a
                    }
                    let AuthMiddlewareQueue = class AuthMiddlewareQueue {
                        constructor(e) {
                            this.auth = e, this.queue = []
                        }
                        pushCallback(e, t) {
                            let wrappedCallback = t => new Promise((i, r) => {
                                try {
                                    let r = e(t);
                                    i(r)
                                } catch (e) {
                                    r(e)
                                }
                            });
                            wrappedCallback.onAbort = t, this.queue.push(wrappedCallback);
                            let i = this.queue.length - 1;
                            return () => {
                                this.queue[i] = () => Promise.resolve()
                            }
                        }
                        async runMiddleware(e) {
                            if (this.auth.currentUser === e) return;
                            let t = [];
                            try {
                                for (let i of this.queue) await i(e), i.onAbort && t.push(i.onAbort)
                            } catch (e) {
                                for (let e of (t.reverse(), t)) try {
                                    e()
                                } catch (e) {}
                                throw this.auth._errorFactory.create("login-blocked", {
                                    originalMessage: null == e ? void 0 : e.message
                                })
                            }
                        }
                    };
                    let AuthImpl = class AuthImpl {
                        constructor(e, t, i, r) {
                            this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = i, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Subscription(this), this.idTokenSubscription = new Subscription(this), this.beforeStateQueue = new AuthMiddlewareQueue(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = f, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
                                appVerificationDisabledForTesting: !1
                            }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion
                        }
                        _initializeWithPersistence(e, t) {
                            return t && (this._popupRedirectResolver = _getInstance(t)), this._initializationPromise = this.queue(async () => {
                                var i, r;
                                if (!this._deleted && (this.persistenceManager = await PersistenceUserManager.create(this, e), !this._deleted)) {
                                    if (null === (i = this._popupRedirectResolver) || void 0 === i ? void 0 : i._shouldInitProactively) try {
                                        await this._popupRedirectResolver._initialize(this)
                                    } catch (e) {}
                                    await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (r = this.currentUser) || void 0 === r ? void 0 : r.uid) || null, this._deleted || (this._isInitialized = !0)
                                }
                            }), this._initializationPromise
                        }
                        async _onStorageEvent() {
                            if (this._deleted) return;
                            let e = await this.assertedPersistence.getCurrentUser();
                            if (this.currentUser || e) {
                                if (this.currentUser && e && this.currentUser.uid === e.uid) {
                                    this._currentUser._assign(e), await this.currentUser.getIdToken();
                                    return
                                }
                                await this._updateCurrentUser(e, !0)
                            }
                        }
                        async initializeCurrentUser(e) {
                            var t;
                            let i = await this.assertedPersistence.getCurrentUser(),
                                r = i,
                                n = !1;
                            if (e && this.config.authDomain) {
                                await this.getOrInitRedirectPersistenceManager();
                                let i = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId,
                                    s = null == r ? void 0 : r._redirectEventId,
                                    a = await this.tryRedirectSignIn(e);
                                (!i || i === s) && (null == a ? void 0 : a.user) && (r = a.user, n = !0)
                            }
                            if (!r) return this.directlySetCurrentUser(null);
                            if (!r._redirectEventId) {
                                if (n) try {
                                    await this.beforeStateQueue.runMiddleware(r)
                                } catch (e) {
                                    r = i, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e))
                                }
                                return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null)
                            }
                            return (_assert(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId) ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r)
                        }
                        async tryRedirectSignIn(e) {
                            let t = null;
                            try {
                                t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
                            } catch (e) {
                                await this._setRedirectUser(null)
                            }
                            return t
                        }
                        async reloadAndSetCurrentUserOrClear(e) {
                            try {
                                await _reloadWithoutSaving(e)
                            } catch (e) {
                                if ((null == e ? void 0 : e.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null)
                            }
                            return this.directlySetCurrentUser(e)
                        }
                        useDeviceLanguage() {
                            this.languageCode = function() {
                                if ("undefined" == typeof navigator) return null;
                                let e = navigator;
                                return e.languages && e.languages[0] || e.language || null
                            }()
                        }
                        async _delete() {
                            this._deleted = !0
                        }
                        async updateCurrentUser(e) {
                            let t = e ? (0, n.m9)(e) : null;
                            return t && _assert(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
                        }
                        async _updateCurrentUser(e, t = !1) {
                            if (!this._deleted) return e && _assert(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
                                await this.directlySetCurrentUser(e), this.notifyAuthListeners()
                            })
                        }
                        async signOut() {
                            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
                        }
                        setPersistence(e) {
                            return this.queue(async () => {
                                await this.assertedPersistence.setPersistence(_getInstance(e))
                            })
                        }
                        async initializeRecaptchaConfig() {
                            let e = await getRecaptchaConfig(this, {
                                    clientType: "CLIENT_TYPE_WEB",
                                    version: "RECAPTCHA_ENTERPRISE"
                                }),
                                t = new RecaptchaConfig(e);
                            if (null == this.tenantId ? this._agentRecaptchaConfig = t : this._tenantRecaptchaConfigs[this.tenantId] = t, t.emailPasswordEnabled) {
                                let e = new RecaptchaEnterpriseVerifier(this);
                                e.verify()
                            }
                        }
                        _getRecaptchaConfig() {
                            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
                        }
                        _getPersistence() {
                            return this.assertedPersistence.persistence.type
                        }
                        _updateErrorMap(e) {
                            this._errorFactory = new n.LL("auth", "Firebase", e())
                        }
                        onAuthStateChanged(e, t, i) {
                            return this.registerStateListener(this.authStateSubscription, e, t, i)
                        }
                        beforeAuthStateChanged(e, t) {
                            return this.beforeStateQueue.pushCallback(e, t)
                        }
                        onIdTokenChanged(e, t, i) {
                            return this.registerStateListener(this.idTokenSubscription, e, t, i)
                        }
                        toJSON() {
                            var e;
                            return {
                                apiKey: this.config.apiKey,
                                authDomain: this.config.authDomain,
                                appName: this.name,
                                currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
                            }
                        }
                        async _setRedirectUser(e, t) {
                            let i = await this.getOrInitRedirectPersistenceManager(t);
                            return null === e ? i.removeCurrentUser() : i.setCurrentUser(e)
                        }
                        async getOrInitRedirectPersistenceManager(e) {
                            if (!this.redirectPersistenceManager) {
                                let t = e && _getInstance(e) || this._popupRedirectResolver;
                                _assert(t, this, "argument-error"), this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
                            }
                            return this.redirectPersistenceManager
                        }
                        async _redirectUserForId(e) {
                            var t, i;
                            return (this._isInitialized && await this.queue(async () => {}), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e) ? this._currentUser : (null === (i = this.redirectUser) || void 0 === i ? void 0 : i._redirectEventId) === e ? this.redirectUser : null
                        }
                        async _persistUserIfCurrent(e) {
                            if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
                        }
                        _notifyListenersIfCurrent(e) {
                            e === this.currentUser && this.notifyAuthListeners()
                        }
                        _key() {
                            return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
                        }
                        _startProactiveRefresh() {
                            this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
                        }
                        _stopProactiveRefresh() {
                            this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
                        }
                        get _currentUser() {
                            return this.currentUser
                        }
                        notifyAuthListeners() {
                            var e, t;
                            if (!this._isInitialized) return;
                            this.idTokenSubscription.next(this.currentUser);
                            let i = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
                            this.lastNotifiedUid !== i && (this.lastNotifiedUid = i, this.authStateSubscription.next(this.currentUser))
                        }
                        registerStateListener(e, t, i, r) {
                            if (this._deleted) return () => {};
                            let n = "function" == typeof t ? t : t.next.bind(t),
                                s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
                            return (_assert(s, this, "internal-error"), s.then(() => n(this.currentUser)), "function" == typeof t) ? e.addObserver(t, i, r) : e.addObserver(t)
                        }
                        async directlySetCurrentUser(e) {
                            this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
                        }
                        queue(e) {
                            return this.operations = this.operations.then(e, e), this.operations
                        }
                        get assertedPersistence() {
                            return _assert(this.persistenceManager, this, "internal-error"), this.persistenceManager
                        }
                        _logFramework(e) {
                            !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks()))
                        }
                        _getFrameworks() {
                            return this.frameworks
                        }
                        async _getAdditionalHeaders() {
                            var e;
                            let t = {
                                "X-Client-Version": this.clientVersion
                            };
                            this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
                            let i = await (null === (e = this.heartbeatServiceProvider.getImmediate({
                                optional: !0
                            })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
                            i && (t["X-Firebase-Client"] = i);
                            let r = await this._getAppCheckToken();
                            return r && (t["X-Firebase-AppCheck"] = r), t
                        }
                        async _getAppCheckToken() {
                            var e;
                            let t = await (null === (e = this.appCheckServiceProvider.getImmediate({
                                optional: !0
                            })) || void 0 === e ? void 0 : e.getToken());
                            return (null == t ? void 0 : t.error) && function(e, ...t) {
                                _.logLevel <= o.in.WARN && _.warn(`Auth (${s.Jn}): ${e}`, ...t)
                            }(`Error while retrieving App Check token: ${t.error}`), null == t ? void 0 : t.token
                        }
                    };

                    function _castAuth(e) {
                        return (0, n.m9)(e)
                    }
                    let Subscription = class Subscription {
                        constructor(e) {
                            this.auth = e, this.observer = null, this.addObserver = (0, n.ne)(e => this.observer = e)
                        }
                        get next() {
                            return _assert(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
                        }
                    };

                    function initializeAuth(e, t) {
                        let i = (0, s.qX)(e, "auth");
                        if (i.isInitialized()) {
                            let e = i.getImmediate(),
                                r = i.getOptions();
                            if ((0, n.vZ)(r, null != t ? t : {})) return e;
                            _fail(e, "already-initialized")
                        }
                        let r = i.initialize({
                            options: t
                        });
                        return r
                    }

                    function connectAuthEmulator(e, t, i) {
                        let r = _castAuth(e);
                        _assert(r._canInitEmulator, r, "emulator-config-failed"), _assert(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
                        let n = !!(null == i ? void 0 : i.disableWarnings),
                            s = extractProtocol(t),
                            {
                                host: a,
                                port: o
                            } = function(e) {
                                let t = extractProtocol(e),
                                    i = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
                                if (!i) return {
                                    host: "",
                                    port: null
                                };
                                let r = i[2].split("@").pop() || "",
                                    n = /^(\[[^\]]+\])(:|$)/.exec(r);
                                if (n) {
                                    let e = n[1];
                                    return {
                                        host: e,
                                        port: parsePort(r.substr(e.length + 1))
                                    }
                                } {
                                    let [e, t] = r.split(":");
                                    return {
                                        host: e,
                                        port: parsePort(t)
                                    }
                                }
                            }(t),
                            l = null === o ? "" : `:${o}`;
                        r.config.emulator = {
                            url: `${s}//${a}${l}/`
                        }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
                            host: a,
                            port: o,
                            protocol: s.replace(":", ""),
                            options: Object.freeze({
                                disableWarnings: n
                            })
                        }), n || function() {
                            function attachBanner() {
                                let e = document.createElement("p"),
                                    t = e.style;
                                e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
                            }
                            "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), "undefined" != typeof window && "undefined" != typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", attachBanner) : attachBanner())
                        }()
                    }

                    function extractProtocol(e) {
                        let t = e.indexOf(":");
                        return t < 0 ? "" : e.substr(0, t + 1)
                    }

                    function parsePort(e) {
                        if (!e) return null;
                        let t = Number(e);
                        return isNaN(t) ? null : t
                    }
                    let AuthCredential = class AuthCredential {
                        constructor(e, t) {
                            this.providerId = e, this.signInMethod = t
                        }
                        toJSON() {
                            return debugFail("not implemented")
                        }
                        _getIdTokenResponse(e) {
                            return debugFail("not implemented")
                        }
                        _linkToIdToken(e, t) {
                            return debugFail("not implemented")
                        }
                        _getReauthenticationResolver(e) {
                            return debugFail("not implemented")
                        }
                    };
                    async function resetPassword(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(e, t))
                    }
                    async function updateEmailPassword(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:update", t)
                    }
                    async function applyActionCode$1(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:update", _addTidIfNecessary(e, t))
                    }
                    async function signInWithPassword(e, t) {
                        return _performSignInRequest(e, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(e, t))
                    }
                    async function sendOobCode(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(e, t))
                    }
                    async function sendEmailVerification$1(e, t) {
                        return sendOobCode(e, t)
                    }
                    async function sendPasswordResetEmail$1(e, t) {
                        return sendOobCode(e, t)
                    }
                    async function sendSignInLinkToEmail$1(e, t) {
                        return sendOobCode(e, t)
                    }
                    async function verifyAndChangeEmail(e, t) {
                        return sendOobCode(e, t)
                    }
                    async function signInWithEmailLink$1(e, t) {
                        return _performSignInRequest(e, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(e, t))
                    }
                    async function signInWithEmailLinkForLinking(e, t) {
                        return _performSignInRequest(e, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(e, t))
                    }
                    let EmailAuthCredential = class EmailAuthCredential extends AuthCredential {
                        constructor(e, t, i, r = null) {
                            super("password", i), this._email = e, this._password = t, this._tenantId = r
                        }
                        static _fromEmailAndPassword(e, t) {
                            return new EmailAuthCredential(e, t, "password")
                        }
                        static _fromEmailAndCode(e, t, i = null) {
                            return new EmailAuthCredential(e, t, "emailLink", i)
                        }
                        toJSON() {
                            return {
                                email: this._email,
                                password: this._password,
                                signInMethod: this.signInMethod,
                                tenantId: this._tenantId
                            }
                        }
                        static fromJSON(e) {
                            let t = "string" == typeof e ? JSON.parse(e) : e;
                            if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
                                if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
                                if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId)
                            }
                            return null
                        }
                        async _getIdTokenResponse(e) {
                            var t;
                            switch (this.signInMethod) {
                                case "password":
                                    let i = {
                                        returnSecureToken: !0,
                                        email: this._email,
                                        password: this._password,
                                        clientType: "CLIENT_TYPE_WEB"
                                    };
                                    if (null === (t = e._getRecaptchaConfig()) || void 0 === t || !t.emailPasswordEnabled) return signInWithPassword(e, i).catch(async t => {
                                        if ("auth/missing-recaptcha-token" !== t.code) return Promise.reject(t); {
                                            console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                                            let t = await injectRecaptchaFields(e, i, "signInWithPassword");
                                            return signInWithPassword(e, t)
                                        }
                                    }); {
                                        let t = await injectRecaptchaFields(e, i, "signInWithPassword");
                                        return signInWithPassword(e, t)
                                    }
                                case "emailLink":
                                    return signInWithEmailLink$1(e, {
                                        email: this._email,
                                        oobCode: this._password
                                    });
                                default:
                                    _fail(e, "internal-error")
                            }
                        }
                        async _linkToIdToken(e, t) {
                            switch (this.signInMethod) {
                                case "password":
                                    return updateEmailPassword(e, {
                                        idToken: t,
                                        returnSecureToken: !0,
                                        email: this._email,
                                        password: this._password
                                    });
                                case "emailLink":
                                    return signInWithEmailLinkForLinking(e, {
                                        idToken: t,
                                        email: this._email,
                                        oobCode: this._password
                                    });
                                default:
                                    _fail(e, "internal-error")
                            }
                        }
                        _getReauthenticationResolver(e) {
                            return this._getIdTokenResponse(e)
                        }
                    };
                    async function signInWithIdp(e, t) {
                        return _performSignInRequest(e, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(e, t))
                    }
                    let OAuthCredential = class OAuthCredential extends AuthCredential {
                        constructor() {
                            super(...arguments), this.pendingToken = null
                        }
                        static _fromParams(e) {
                            let t = new OAuthCredential(e.providerId, e.signInMethod);
                            return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : _fail("argument-error"), t
                        }
                        toJSON() {
                            return {
                                idToken: this.idToken,
                                accessToken: this.accessToken,
                                secret: this.secret,
                                nonce: this.nonce,
                                pendingToken: this.pendingToken,
                                providerId: this.providerId,
                                signInMethod: this.signInMethod
                            }
                        }
                        static fromJSON(e) {
                            let t = "string" == typeof e ? JSON.parse(e) : e,
                                {
                                    providerId: i,
                                    signInMethod: r
                                } = t,
                                n = (0, a._T)(t, ["providerId", "signInMethod"]);
                            if (!i || !r) return null;
                            let s = new OAuthCredential(i, r);
                            return s.idToken = n.idToken || void 0, s.accessToken = n.accessToken || void 0, s.secret = n.secret, s.nonce = n.nonce, s.pendingToken = n.pendingToken || null, s
                        }
                        _getIdTokenResponse(e) {
                            let t = this.buildRequest();
                            return signInWithIdp(e, t)
                        }
                        _linkToIdToken(e, t) {
                            let i = this.buildRequest();
                            return i.idToken = t, signInWithIdp(e, i)
                        }
                        _getReauthenticationResolver(e) {
                            let t = this.buildRequest();
                            return t.autoCreate = !1, signInWithIdp(e, t)
                        }
                        buildRequest() {
                            let e = {
                                requestUri: "http://localhost",
                                returnSecureToken: !0
                            };
                            if (this.pendingToken) e.pendingToken = this.pendingToken;
                            else {
                                let t = {};
                                this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = (0, n.xO)(t)
                            }
                            return e
                        }
                    };
                    async function sendPhoneVerificationCode(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(e, t))
                    }
                    async function signInWithPhoneNumber$1(e, t) {
                        return _performSignInRequest(e, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(e, t))
                    }
                    async function linkWithPhoneNumber$1(e, t) {
                        let i = await _performSignInRequest(e, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(e, t));
                        if (i.temporaryProof) throw _makeTaggedError(e, "account-exists-with-different-credential", i);
                        return i
                    }
                    let w = {
                        USER_NOT_FOUND: "user-not-found"
                    };
                    async function verifyPhoneNumberForExisting(e, t) {
                        let i = Object.assign(Object.assign({}, t), {
                            operation: "REAUTH"
                        });
                        return _performSignInRequest(e, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(e, i), w)
                    }
                    let PhoneAuthCredential = class PhoneAuthCredential extends AuthCredential {
                        constructor(e) {
                            super("phone", "phone"), this.params = e
                        }
                        static _fromVerification(e, t) {
                            return new PhoneAuthCredential({
                                verificationId: e,
                                verificationCode: t
                            })
                        }
                        static _fromTokenResponse(e, t) {
                            return new PhoneAuthCredential({
                                phoneNumber: e,
                                temporaryProof: t
                            })
                        }
                        _getIdTokenResponse(e) {
                            return signInWithPhoneNumber$1(e, this._makeVerificationRequest())
                        }
                        _linkToIdToken(e, t) {
                            return linkWithPhoneNumber$1(e, Object.assign({
                                idToken: t
                            }, this._makeVerificationRequest()))
                        }
                        _getReauthenticationResolver(e) {
                            return verifyPhoneNumberForExisting(e, this._makeVerificationRequest())
                        }
                        _makeVerificationRequest() {
                            let {
                                temporaryProof: e,
                                phoneNumber: t,
                                verificationId: i,
                                verificationCode: r
                            } = this.params;
                            return e && t ? {
                                temporaryProof: e,
                                phoneNumber: t
                            } : {
                                sessionInfo: i,
                                code: r
                            }
                        }
                        toJSON() {
                            let e = {
                                providerId: this.providerId
                            };
                            return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e
                        }
                        static fromJSON(e) {
                            "string" == typeof e && (e = JSON.parse(e));
                            let {
                                verificationId: t,
                                verificationCode: i,
                                phoneNumber: r,
                                temporaryProof: n
                            } = e;
                            return i || t || r || n ? new PhoneAuthCredential({
                                verificationId: t,
                                verificationCode: i,
                                phoneNumber: r,
                                temporaryProof: n
                            }) : null
                        }
                    };
                    let ActionCodeURL = class ActionCodeURL {
                        constructor(e) {
                            var t, i, r, s, a, o;
                            let l = (0, n.zd)((0, n.pd)(e)),
                                u = null !== (t = l.apiKey) && void 0 !== t ? t : null,
                                c = null !== (i = l.oobCode) && void 0 !== i ? i : null,
                                d = function(e) {
                                    switch (e) {
                                        case "recoverEmail":
                                            return "RECOVER_EMAIL";
                                        case "resetPassword":
                                            return "PASSWORD_RESET";
                                        case "signIn":
                                            return "EMAIL_SIGNIN";
                                        case "verifyEmail":
                                            return "VERIFY_EMAIL";
                                        case "verifyAndChangeEmail":
                                            return "VERIFY_AND_CHANGE_EMAIL";
                                        case "revertSecondFactorAddition":
                                            return "REVERT_SECOND_FACTOR_ADDITION";
                                        default:
                                            return null
                                    }
                                }(null !== (r = l.mode) && void 0 !== r ? r : null);
                            _assert(u && c && d, "argument-error"), this.apiKey = u, this.operation = d, this.code = c, this.continueUrl = null !== (s = l.continueUrl) && void 0 !== s ? s : null, this.languageCode = null !== (a = l.languageCode) && void 0 !== a ? a : null, this.tenantId = null !== (o = l.tenantId) && void 0 !== o ? o : null
                        }
                        static parseLink(e) {
                            let t = function(e) {
                                let t = (0, n.zd)((0, n.pd)(e)).link,
                                    i = t ? (0, n.zd)((0, n.pd)(t)).deep_link_id : null,
                                    r = (0, n.zd)((0, n.pd)(e)).deep_link_id,
                                    s = r ? (0, n.zd)((0, n.pd)(r)).link : null;
                                return s || r || i || t || e
                            }(e);
                            try {
                                return new ActionCodeURL(t)
                            } catch (e) {
                                return null
                            }
                        }
                    };

                    function parseActionCodeURL(e) {
                        return ActionCodeURL.parseLink(e)
                    }
                    let EmailAuthProvider = class EmailAuthProvider {
                        constructor() {
                            this.providerId = EmailAuthProvider.PROVIDER_ID
                        }
                        static credential(e, t) {
                            return EmailAuthCredential._fromEmailAndPassword(e, t)
                        }
                        static credentialWithLink(e, t) {
                            let i = ActionCodeURL.parseLink(t);
                            return _assert(i, "argument-error"), EmailAuthCredential._fromEmailAndCode(e, i.code, i.tenantId)
                        }
                    };
                    EmailAuthProvider.PROVIDER_ID = "password", EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
                    let FederatedAuthProvider = class FederatedAuthProvider {
                        constructor(e) {
                            this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
                        }
                        setDefaultLanguage(e) {
                            this.defaultLanguageCode = e
                        }
                        setCustomParameters(e) {
                            return this.customParameters = e, this
                        }
                        getCustomParameters() {
                            return this.customParameters
                        }
                    };
                    let BaseOAuthProvider = class BaseOAuthProvider extends FederatedAuthProvider {
                        constructor() {
                            super(...arguments), this.scopes = []
                        }
                        addScope(e) {
                            return this.scopes.includes(e) || this.scopes.push(e), this
                        }
                        getScopes() {
                            return [...this.scopes]
                        }
                    };
                    let OAuthProvider = class OAuthProvider extends BaseOAuthProvider {
                        static credentialFromJSON(e) {
                            let t = "string" == typeof e ? JSON.parse(e) : e;
                            return _assert("providerId" in t && "signInMethod" in t, "argument-error"), OAuthCredential._fromParams(t)
                        }
                        credential(e) {
                            return this._credential(Object.assign(Object.assign({}, e), {
                                nonce: e.rawNonce
                            }))
                        }
                        _credential(e) {
                            return _assert(e.idToken || e.accessToken, "argument-error"), OAuthCredential._fromParams(Object.assign(Object.assign({}, e), {
                                providerId: this.providerId,
                                signInMethod: this.providerId
                            }))
                        }
                        static credentialFromResult(e) {
                            return OAuthProvider.oauthCredentialFromTaggedObject(e)
                        }
                        static credentialFromError(e) {
                            return OAuthProvider.oauthCredentialFromTaggedObject(e.customData || {})
                        }
                        static oauthCredentialFromTaggedObject({
                            _tokenResponse: e
                        }) {
                            if (!e) return null;
                            let {
                                oauthIdToken: t,
                                oauthAccessToken: i,
                                oauthTokenSecret: r,
                                pendingToken: n,
                                nonce: s,
                                providerId: a
                            } = e;
                            if (!i && !r && !t && !n || !a) return null;
                            try {
                                return new OAuthProvider(a)._credential({
                                    idToken: t,
                                    accessToken: i,
                                    nonce: s,
                                    pendingToken: n
                                })
                            } catch (e) {
                                return null
                            }
                        }
                    };
                    let FacebookAuthProvider = class FacebookAuthProvider extends BaseOAuthProvider {
                        constructor() {
                            super("facebook.com")
                        }
                        static credential(e) {
                            return OAuthCredential._fromParams({
                                providerId: FacebookAuthProvider.PROVIDER_ID,
                                signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
                                accessToken: e
                            })
                        }
                        static credentialFromResult(e) {
                            return FacebookAuthProvider.credentialFromTaggedObject(e)
                        }
                        static credentialFromError(e) {
                            return FacebookAuthProvider.credentialFromTaggedObject(e.customData || {})
                        }
                        static credentialFromTaggedObject({
                            _tokenResponse: e
                        }) {
                            if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
                            try {
                                return FacebookAuthProvider.credential(e.oauthAccessToken)
                            } catch (e) {
                                return null
                            }
                        }
                    };
                    FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com", FacebookAuthProvider.PROVIDER_ID = "facebook.com";
                    let GoogleAuthProvider = class GoogleAuthProvider extends BaseOAuthProvider {
                        constructor() {
                            super("google.com"), this.addScope("profile")
                        }
                        static credential(e, t) {
                            return OAuthCredential._fromParams({
                                providerId: GoogleAuthProvider.PROVIDER_ID,
                                signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
                                idToken: e,
                                accessToken: t
                            })
                        }
                        static credentialFromResult(e) {
                            return GoogleAuthProvider.credentialFromTaggedObject(e)
                        }
                        static credentialFromError(e) {
                            return GoogleAuthProvider.credentialFromTaggedObject(e.customData || {})
                        }
                        static credentialFromTaggedObject({
                            _tokenResponse: e
                        }) {
                            if (!e) return null;
                            let {
                                oauthIdToken: t,
                                oauthAccessToken: i
                            } = e;
                            if (!t && !i) return null;
                            try {
                                return GoogleAuthProvider.credential(t, i)
                            } catch (e) {
                                return null
                            }
                        }
                    };
                    GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com", GoogleAuthProvider.PROVIDER_ID = "google.com";
                    let GithubAuthProvider = class GithubAuthProvider extends BaseOAuthProvider {
                        constructor() {
                            super("github.com")
                        }
                        static credential(e) {
                            return OAuthCredential._fromParams({
                                providerId: GithubAuthProvider.PROVIDER_ID,
                                signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
                                accessToken: e
                            })
                        }
                        static credentialFromResult(e) {
                            return GithubAuthProvider.credentialFromTaggedObject(e)
                        }
                        static credentialFromError(e) {
                            return GithubAuthProvider.credentialFromTaggedObject(e.customData || {})
                        }
                        static credentialFromTaggedObject({
                            _tokenResponse: e
                        }) {
                            if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
                            try {
                                return GithubAuthProvider.credential(e.oauthAccessToken)
                            } catch (e) {
                                return null
                            }
                        }
                    };
                    GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com", GithubAuthProvider.PROVIDER_ID = "github.com";
                    let SAMLAuthCredential = class SAMLAuthCredential extends AuthCredential {
                        constructor(e, t) {
                            super(e, e), this.pendingToken = t
                        }
                        _getIdTokenResponse(e) {
                            let t = this.buildRequest();
                            return signInWithIdp(e, t)
                        }
                        _linkToIdToken(e, t) {
                            let i = this.buildRequest();
                            return i.idToken = t, signInWithIdp(e, i)
                        }
                        _getReauthenticationResolver(e) {
                            let t = this.buildRequest();
                            return t.autoCreate = !1, signInWithIdp(e, t)
                        }
                        toJSON() {
                            return {
                                signInMethod: this.signInMethod,
                                providerId: this.providerId,
                                pendingToken: this.pendingToken
                            }
                        }
                        static fromJSON(e) {
                            let t = "string" == typeof e ? JSON.parse(e) : e,
                                {
                                    providerId: i,
                                    signInMethod: r,
                                    pendingToken: n
                                } = t;
                            return i && r && n && i === r ? new SAMLAuthCredential(i, n) : null
                        }
                        static _create(e, t) {
                            return new SAMLAuthCredential(e, t)
                        }
                        buildRequest() {
                            return {
                                requestUri: "http://localhost",
                                returnSecureToken: !0,
                                pendingToken: this.pendingToken
                            }
                        }
                    };
                    let SAMLAuthProvider = class SAMLAuthProvider extends FederatedAuthProvider {
                        constructor(e) {
                            _assert(e.startsWith("saml."), "argument-error"), super(e)
                        }
                        static credentialFromResult(e) {
                            return SAMLAuthProvider.samlCredentialFromTaggedObject(e)
                        }
                        static credentialFromError(e) {
                            return SAMLAuthProvider.samlCredentialFromTaggedObject(e.customData || {})
                        }
                        static credentialFromJSON(e) {
                            let t = SAMLAuthCredential.fromJSON(e);
                            return _assert(t, "argument-error"), t
                        }
                        static samlCredentialFromTaggedObject({
                            _tokenResponse: e
                        }) {
                            if (!e) return null;
                            let {
                                pendingToken: t,
                                providerId: i
                            } = e;
                            if (!t || !i) return null;
                            try {
                                return SAMLAuthCredential._create(i, t)
                            } catch (e) {
                                return null
                            }
                        }
                    };
                    let TwitterAuthProvider = class TwitterAuthProvider extends BaseOAuthProvider {
                        constructor() {
                            super("twitter.com")
                        }
                        static credential(e, t) {
                            return OAuthCredential._fromParams({
                                providerId: TwitterAuthProvider.PROVIDER_ID,
                                signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
                                oauthToken: e,
                                oauthTokenSecret: t
                            })
                        }
                        static credentialFromResult(e) {
                            return TwitterAuthProvider.credentialFromTaggedObject(e)
                        }
                        static credentialFromError(e) {
                            return TwitterAuthProvider.credentialFromTaggedObject(e.customData || {})
                        }
                        static credentialFromTaggedObject({
                            _tokenResponse: e
                        }) {
                            if (!e) return null;
                            let {
                                oauthAccessToken: t,
                                oauthTokenSecret: i
                            } = e;
                            if (!t || !i) return null;
                            try {
                                return TwitterAuthProvider.credential(t, i)
                            } catch (e) {
                                return null
                            }
                        }
                    };
                    async function signUp(e, t) {
                        return _performSignInRequest(e, "POST", "/v1/accounts:signUp", _addTidIfNecessary(e, t))
                    }
                    TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com", TwitterAuthProvider.PROVIDER_ID = "twitter.com";
                    let UserCredentialImpl = class UserCredentialImpl {
                        constructor(e) {
                            this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
                        }
                        static async _fromIdTokenResponse(e, t, i, r = !1) {
                            let n = await UserImpl._fromIdTokenResponse(e, i, r),
                                s = providerIdForResponse(i),
                                a = new UserCredentialImpl({
                                    user: n,
                                    providerId: s,
                                    _tokenResponse: i,
                                    operationType: t
                                });
                            return a
                        }
                        static async _forOperation(e, t, i) {
                            await e._updateTokensIfNecessary(i, !0);
                            let r = providerIdForResponse(i);
                            return new UserCredentialImpl({
                                user: e,
                                providerId: r,
                                _tokenResponse: i,
                                operationType: t
                            })
                        }
                    };

                    function providerIdForResponse(e) {
                        return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
                    }
                    async function signInAnonymously(e) {
                        var t;
                        let i = _castAuth(e);
                        if (await i._initializationPromise, null === (t = i.currentUser) || void 0 === t ? void 0 : t.isAnonymous) return new UserCredentialImpl({
                            user: i.currentUser,
                            providerId: null,
                            operationType: "signIn"
                        });
                        let r = await signUp(i, {
                                returnSecureToken: !0
                            }),
                            n = await UserCredentialImpl._fromIdTokenResponse(i, "signIn", r, !0);
                        return await i._updateCurrentUser(n.user), n
                    }
                    let MultiFactorError = class MultiFactorError extends n.ZR {
                        constructor(e, t, i, r) {
                            var n;
                            super(t.code, t.message), this.operationType = i, this.user = r, Object.setPrototypeOf(this, MultiFactorError.prototype), this.customData = {
                                appName: e.name,
                                tenantId: null !== (n = e.tenantId) && void 0 !== n ? n : void 0,
                                _serverResponse: t.customData._serverResponse,
                                operationType: i
                            }
                        }
                        static _fromErrorAndOperation(e, t, i, r) {
                            return new MultiFactorError(e, t, i, r)
                        }
                    };

                    function _processCredentialSavingMfaContextIfNecessary(e, t, i, r) {
                        let n = "reauthenticate" === t ? i._getReauthenticationResolver(e) : i._getIdTokenResponse(e);
                        return n.catch(i => {
                            if ("auth/multi-factor-auth-required" === i.code) throw MultiFactorError._fromErrorAndOperation(e, i, t, r);
                            throw i
                        })
                    }

                    function providerDataAsNames(e) {
                        return new Set(e.map(({
                            providerId: e
                        }) => e).filter(e => !!e))
                    }
                    async function unlink(e, t) {
                        let i = (0, n.m9)(e);
                        await _assertLinkedStatus(!0, i, t);
                        let {
                            providerUserInfo: r
                        } = await deleteLinkedAccounts(i.auth, {
                            idToken: await i.getIdToken(),
                            deleteProvider: [t]
                        }), s = providerDataAsNames(r || []);
                        return i.providerData = i.providerData.filter(e => s.has(e.providerId)), s.has("phone") || (i.phoneNumber = null), await i.auth._persistUserIfCurrent(i), i
                    }
                    async function _link$1(e, t, i = !1) {
                        let r = await _logoutIfInvalidated(e, t._linkToIdToken(e.auth, await e.getIdToken()), i);
                        return UserCredentialImpl._forOperation(e, "link", r)
                    }
                    async function _assertLinkedStatus(e, t, i) {
                        await _reloadWithoutSaving(t);
                        let r = providerDataAsNames(t.providerData),
                            n = !1 === e ? "provider-already-linked" : "no-such-provider";
                        _assert(r.has(i) === e, t.auth, n)
                    }
                    async function _reauthenticate(e, t, i = !1) {
                        let {
                            auth: r
                        } = e, n = "reauthenticate";
                        try {
                            let s = await _logoutIfInvalidated(e, _processCredentialSavingMfaContextIfNecessary(r, n, t, e), i);
                            _assert(s.idToken, r, "internal-error");
                            let a = _parseToken(s.idToken);
                            _assert(a, r, "internal-error");
                            let {
                                sub: o
                            } = a;
                            return _assert(e.uid === o, r, "user-mismatch"), UserCredentialImpl._forOperation(e, n, s)
                        } catch (e) {
                            throw (null == e ? void 0 : e.code) === "auth/user-not-found" && _fail(r, "user-mismatch"), e
                        }
                    }
                    async function _signInWithCredential(e, t, i = !1) {
                        let r = "signIn",
                            n = await _processCredentialSavingMfaContextIfNecessary(e, r, t),
                            s = await UserCredentialImpl._fromIdTokenResponse(e, r, n);
                        return i || await e._updateCurrentUser(s.user), s
                    }
                    async function signInWithCredential(e, t) {
                        return _signInWithCredential(_castAuth(e), t)
                    }
                    async function linkWithCredential(e, t) {
                        let i = (0, n.m9)(e);
                        return await _assertLinkedStatus(!1, i, t.providerId), _link$1(i, t)
                    }
                    async function reauthenticateWithCredential(e, t) {
                        return _reauthenticate((0, n.m9)(e), t)
                    }
                    async function signInWithCustomToken$1(e, t) {
                        return _performSignInRequest(e, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(e, t))
                    }
                    async function signInWithCustomToken(e, t) {
                        let i = _castAuth(e),
                            r = await signInWithCustomToken$1(i, {
                                token: t,
                                returnSecureToken: !0
                            }),
                            n = await UserCredentialImpl._fromIdTokenResponse(i, "signIn", r);
                        return await i._updateCurrentUser(n.user), n
                    }
                    let MultiFactorInfoImpl = class MultiFactorInfoImpl {
                        constructor(e, t) {
                            this.factorId = e, this.uid = t.mfaEnrollmentId, this.enrollmentTime = new Date(t.enrolledAt).toUTCString(), this.displayName = t.displayName
                        }
                        static _fromServerResponse(e, t) {
                            return "phoneInfo" in t ? PhoneMultiFactorInfoImpl._fromServerResponse(e, t) : "totpInfo" in t ? TotpMultiFactorInfoImpl._fromServerResponse(e, t) : _fail(e, "internal-error")
                        }
                    };
                    let PhoneMultiFactorInfoImpl = class PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
                        constructor(e) {
                            super("phone", e), this.phoneNumber = e.phoneInfo
                        }
                        static _fromServerResponse(e, t) {
                            return new PhoneMultiFactorInfoImpl(t)
                        }
                    };
                    let TotpMultiFactorInfoImpl = class TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
                        constructor(e) {
                            super("totp", e)
                        }
                        static _fromServerResponse(e, t) {
                            return new TotpMultiFactorInfoImpl(t)
                        }
                    };

                    function _setActionCodeSettingsOnRequest(e, t, i) {
                        var r;
                        _assert((null === (r = i.url) || void 0 === r ? void 0 : r.length) > 0, e, "invalid-continue-uri"), _assert(void 0 === i.dynamicLinkDomain || i.dynamicLinkDomain.length > 0, e, "invalid-dynamic-link-domain"), t.continueUrl = i.url, t.dynamicLinkDomain = i.dynamicLinkDomain, t.canHandleCodeInApp = i.handleCodeInApp, i.iOS && (_assert(i.iOS.bundleId.length > 0, e, "missing-ios-bundle-id"), t.iOSBundleId = i.iOS.bundleId), i.android && (_assert(i.android.packageName.length > 0, e, "missing-android-pkg-name"), t.androidInstallApp = i.android.installApp, t.androidMinimumVersionCode = i.android.minimumVersion, t.androidPackageName = i.android.packageName)
                    }
                    async function sendPasswordResetEmail(e, t, i) {
                        var r;
                        let n = _castAuth(e),
                            s = {
                                requestType: "PASSWORD_RESET",
                                email: t,
                                clientType: "CLIENT_TYPE_WEB"
                            };
                        if (null === (r = n._getRecaptchaConfig()) || void 0 === r ? void 0 : r.emailPasswordEnabled) {
                            let e = await injectRecaptchaFields(n, s, "getOobCode", !0);
                            i && _setActionCodeSettingsOnRequest(n, e, i), await sendPasswordResetEmail$1(n, e)
                        } else i && _setActionCodeSettingsOnRequest(n, s, i), await sendPasswordResetEmail$1(n, s).catch(async e => {
                            if ("auth/missing-recaptcha-token" !== e.code) return Promise.reject(e); {
                                console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
                                let e = await injectRecaptchaFields(n, s, "getOobCode", !0);
                                i && _setActionCodeSettingsOnRequest(n, e, i), await sendPasswordResetEmail$1(n, e)
                            }
                        })
                    }
                    async function confirmPasswordReset(e, t, i) {
                        await resetPassword((0, n.m9)(e), {
                            oobCode: t,
                            newPassword: i
                        })
                    }
                    async function applyActionCode(e, t) {
                        await applyActionCode$1((0, n.m9)(e), {
                            oobCode: t
                        })
                    }
                    async function checkActionCode(e, t) {
                        let i = (0, n.m9)(e),
                            r = await resetPassword(i, {
                                oobCode: t
                            }),
                            s = r.requestType;
                        switch (_assert(s, i, "internal-error"), s) {
                            case "EMAIL_SIGNIN":
                                break;
                            case "VERIFY_AND_CHANGE_EMAIL":
                                _assert(r.newEmail, i, "internal-error");
                                break;
                            case "REVERT_SECOND_FACTOR_ADDITION":
                                _assert(r.mfaInfo, i, "internal-error");
                            default:
                                _assert(r.email, i, "internal-error")
                        }
                        let a = null;
                        return r.mfaInfo && (a = MultiFactorInfoImpl._fromServerResponse(_castAuth(i), r.mfaInfo)), {
                            data: {
                                email: ("VERIFY_AND_CHANGE_EMAIL" === r.requestType ? r.newEmail : r.email) || null,
                                previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === r.requestType ? r.email : r.newEmail) || null,
                                multiFactorInfo: a
                            },
                            operation: s
                        }
                    }
                    async function verifyPasswordResetCode(e, t) {
                        let {
                            data: i
                        } = await checkActionCode((0, n.m9)(e), t);
                        return i.email
                    }
                    async function createUserWithEmailAndPassword(e, t, i) {
                        var r;
                        let n;
                        let s = _castAuth(e),
                            a = {
                                returnSecureToken: !0,
                                email: t,
                                password: i,
                                clientType: "CLIENT_TYPE_WEB"
                            };
                        if (null === (r = s._getRecaptchaConfig()) || void 0 === r ? void 0 : r.emailPasswordEnabled) {
                            let e = await injectRecaptchaFields(s, a, "signUpPassword");
                            n = signUp(s, e)
                        } else n = signUp(s, a).catch(async e => {
                            if ("auth/missing-recaptcha-token" !== e.code) return Promise.reject(e); {
                                console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
                                let e = await injectRecaptchaFields(s, a, "signUpPassword");
                                return signUp(s, e)
                            }
                        });
                        let o = await n.catch(e => Promise.reject(e)),
                            l = await UserCredentialImpl._fromIdTokenResponse(s, "signIn", o);
                        return await s._updateCurrentUser(l.user), l
                    }

                    function signInWithEmailAndPassword(e, t, i) {
                        return signInWithCredential((0, n.m9)(e), EmailAuthProvider.credential(t, i))
                    }
                    async function sendSignInLinkToEmail(e, t, i) {
                        var r;
                        let n = _castAuth(e),
                            s = {
                                requestType: "EMAIL_SIGNIN",
                                email: t,
                                clientType: "CLIENT_TYPE_WEB"
                            };

                        function setActionCodeSettings(e, t) {
                            _assert(t.handleCodeInApp, n, "argument-error"), t && _setActionCodeSettingsOnRequest(n, e, t)
                        }
                        if (null === (r = n._getRecaptchaConfig()) || void 0 === r ? void 0 : r.emailPasswordEnabled) {
                            let e = await injectRecaptchaFields(n, s, "getOobCode", !0);
                            setActionCodeSettings(e, i), await sendSignInLinkToEmail$1(n, e)
                        } else setActionCodeSettings(s, i), await sendSignInLinkToEmail$1(n, s).catch(async e => {
                            if ("auth/missing-recaptcha-token" !== e.code) return Promise.reject(e); {
                                console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                                let e = await injectRecaptchaFields(n, s, "getOobCode", !0);
                                setActionCodeSettings(e, i), await sendSignInLinkToEmail$1(n, e)
                            }
                        })
                    }

                    function isSignInWithEmailLink(e, t) {
                        let i = ActionCodeURL.parseLink(t);
                        return (null == i ? void 0 : i.operation) === "EMAIL_SIGNIN"
                    }
                    async function signInWithEmailLink(e, t, i) {
                        let r = (0, n.m9)(e),
                            s = EmailAuthProvider.credentialWithLink(t, i || _getCurrentUrl());
                        return _assert(s._tenantId === (r.tenantId || null), r, "tenant-id-mismatch"), signInWithCredential(r, s)
                    }
                    async function createAuthUri(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(e, t))
                    }
                    async function fetchSignInMethodsForEmail(e, t) {
                        let i = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost",
                            {
                                signinMethods: r
                            } = await createAuthUri((0, n.m9)(e), {
                                identifier: t,
                                continueUri: i
                            });
                        return r || []
                    }
                    async function sendEmailVerification(e, t) {
                        let i = (0, n.m9)(e),
                            r = await e.getIdToken(),
                            s = {
                                requestType: "VERIFY_EMAIL",
                                idToken: r
                            };
                        t && _setActionCodeSettingsOnRequest(i.auth, s, t);
                        let {
                            email: a
                        } = await sendEmailVerification$1(i.auth, s);
                        a !== e.email && await e.reload()
                    }
                    async function verifyBeforeUpdateEmail(e, t, i) {
                        let r = (0, n.m9)(e),
                            s = await e.getIdToken(),
                            a = {
                                requestType: "VERIFY_AND_CHANGE_EMAIL",
                                idToken: s,
                                newEmail: t
                            };
                        i && _setActionCodeSettingsOnRequest(r.auth, a, i);
                        let {
                            email: o
                        } = await verifyAndChangeEmail(r.auth, a);
                        o !== e.email && await e.reload()
                    }
                    async function updateProfile$1(e, t) {
                        return _performApiRequest(e, "POST", "/v1/accounts:update", t)
                    }
                    async function updateProfile(e, {
                        displayName: t,
                        photoURL: i
                    }) {
                        if (void 0 === t && void 0 === i) return;
                        let r = (0, n.m9)(e),
                            s = await r.getIdToken(),
                            a = await _logoutIfInvalidated(r, updateProfile$1(r.auth, {
                                idToken: s,
                                displayName: t,
                                photoUrl: i,
                                returnSecureToken: !0
                            }));
                        r.displayName = a.displayName || null, r.photoURL = a.photoUrl || null;
                        let o = r.providerData.find(({
                            providerId: e
                        }) => "password" === e);
                        o && (o.displayName = r.displayName, o.photoURL = r.photoURL), await r._updateTokensIfNecessary(a)
                    }

                    function updateEmail(e, t) {
                        return updateEmailOrPassword((0, n.m9)(e), t, null)
                    }

                    function updatePassword(e, t) {
                        return updateEmailOrPassword((0, n.m9)(e), null, t)
                    }
                    async function updateEmailOrPassword(e, t, i) {
                        let {
                            auth: r
                        } = e, n = await e.getIdToken(), s = {
                            idToken: n,
                            returnSecureToken: !0
                        };
                        t && (s.email = t), i && (s.password = i);
                        let a = await _logoutIfInvalidated(e, updateEmailPassword(r, s));
                        await e._updateTokensIfNecessary(a, !0)
                    }
                    let GenericAdditionalUserInfo = class GenericAdditionalUserInfo {
                        constructor(e, t, i = {}) {
                            this.isNewUser = e, this.providerId = t, this.profile = i
                        }
                    };
                    let FederatedAdditionalUserInfoWithUsername = class FederatedAdditionalUserInfoWithUsername extends GenericAdditionalUserInfo {
                        constructor(e, t, i, r) {
                            super(e, t, i), this.username = r
                        }
                    };
                    let FacebookAdditionalUserInfo = class FacebookAdditionalUserInfo extends GenericAdditionalUserInfo {
                        constructor(e, t) {
                            super(e, "facebook.com", t)
                        }
                    };
                    let GithubAdditionalUserInfo = class GithubAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
                        constructor(e, t) {
                            super(e, "github.com", t, "string" == typeof(null == t ? void 0 : t.login) ? null == t ? void 0 : t.login : null)
                        }
                    };
                    let GoogleAdditionalUserInfo = class GoogleAdditionalUserInfo extends GenericAdditionalUserInfo {
                        constructor(e, t) {
                            super(e, "google.com", t)
                        }
                    };
                    let TwitterAdditionalUserInfo = class TwitterAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
                        constructor(e, t, i) {
                            super(e, "twitter.com", t, i)
                        }
                    };

                    function getAdditionalUserInfo(e) {
                        let {
                            user: t,
                            _tokenResponse: i
                        } = e;
                        return t.isAnonymous && !i ? {
                            providerId: null,
                            isNewUser: !1,
                            profile: null
                        } : function(e) {
                            var t, i;
                            if (!e) return null;
                            let {
                                providerId: r
                            } = e, n = e.rawUserInfo ? JSON.parse(e.rawUserInfo) : {}, s = e.isNewUser || "identitytoolkit#SignupNewUserResponse" === e.kind;
                            if (!r && (null == e ? void 0 : e.idToken)) {
                                let r = null === (i = null === (t = _parseToken(e.idToken)) || void 0 === t ? void 0 : t.firebase) || void 0 === i ? void 0 : i.sign_in_provider;
                                if (r) {
                                    let e = "anonymous" !== r && "custom" !== r ? r : null;
                                    return new GenericAdditionalUserInfo(s, e)
                                }
                            }
                            if (!r) return null;
                            switch (r) {
                                case "facebook.com":
                                    return new FacebookAdditionalUserInfo(s, n);
                                case "github.com":
                                    return new GithubAdditionalUserInfo(s, n);
                                case "google.com":
                                    return new GoogleAdditionalUserInfo(s, n);
                                case "twitter.com":
                                    return new TwitterAdditionalUserInfo(s, n, e.screenName || null);
                                case "custom":
                                case "anonymous":
                                    return new GenericAdditionalUserInfo(s, null);
                                default:
                                    return new GenericAdditionalUserInfo(s, r, n)
                            }
                        }(i)
                    }

                    function setPersistence(e, t) {
                        return (0, n.m9)(e).setPersistence(t)
                    }

                    function initializeRecaptchaConfig(e) {
                        let t = _castAuth(e);
                        return t.initializeRecaptchaConfig()
                    }

                    function onIdTokenChanged(e, t, i, r) {
                        return (0, n.m9)(e).onIdTokenChanged(t, i, r)
                    }

                    function beforeAuthStateChanged(e, t, i) {
                        return (0, n.m9)(e).beforeAuthStateChanged(t, i)
                    }

                    function onAuthStateChanged(e, t, i, r) {
                        return (0, n.m9)(e).onAuthStateChanged(t, i, r)
                    }

                    function useDeviceLanguage(e) {
                        (0, n.m9)(e).useDeviceLanguage()
                    }

                    function updateCurrentUser(e, t) {
                        return (0, n.m9)(e).updateCurrentUser(t)
                    }

                    function signOut(e) {
                        return (0, n.m9)(e).signOut()
                    }
                    async function deleteUser(e) {
                        return (0, n.m9)(e).delete()
                    }
                    let MultiFactorSessionImpl = class MultiFactorSessionImpl {
                        constructor(e, t, i) {
                            this.type = e, this.credential = t, this.auth = i
                        }
                        static _fromIdtoken(e, t) {
                            return new MultiFactorSessionImpl("enroll", e, t)
                        }
                        static _fromMfaPendingCredential(e) {
                            return new MultiFactorSessionImpl("signin", e)
                        }
                        toJSON() {
                            let e = "enroll" === this.type ? "idToken" : "pendingCredential";
                            return {
                                multiFactorSession: {
                                    [e]: this.credential
                                }
                            }
                        }
                        static fromJSON(e) {
                            var t, i;
                            if (null == e ? void 0 : e.multiFactorSession) {
                                if (null === (t = e.multiFactorSession) || void 0 === t ? void 0 : t.pendingCredential) return MultiFactorSessionImpl._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);
                                if (null === (i = e.multiFactorSession) || void 0 === i ? void 0 : i.idToken) return MultiFactorSessionImpl._fromIdtoken(e.multiFactorSession.idToken)
                            }
                            return null
                        }
                    };
                    let MultiFactorResolverImpl = class MultiFactorResolverImpl {
                        constructor(e, t, i) {
                            this.session = e, this.hints = t, this.signInResolver = i
                        }
                        static _fromError(e, t) {
                            let i = _castAuth(e),
                                r = t.customData._serverResponse,
                                n = (r.mfaInfo || []).map(e => MultiFactorInfoImpl._fromServerResponse(i, e));
                            _assert(r.mfaPendingCredential, i, "internal-error");
                            let s = MultiFactorSessionImpl._fromMfaPendingCredential(r.mfaPendingCredential);
                            return new MultiFactorResolverImpl(s, n, async e => {
                                let n = await e._process(i, s);
                                delete r.mfaInfo, delete r.mfaPendingCredential;
                                let a = Object.assign(Object.assign({}, r), {
                                    idToken: n.idToken,
                                    refreshToken: n.refreshToken
                                });
                                switch (t.operationType) {
                                    case "signIn":
                                        let o = await UserCredentialImpl._fromIdTokenResponse(i, t.operationType, a);
                                        return await i._updateCurrentUser(o.user), o;
                                    case "reauthenticate":
                                        return _assert(t.user, i, "internal-error"), UserCredentialImpl._forOperation(t.user, t.operationType, a);
                                    default:
                                        _fail(i, "internal-error")
                                }
                            })
                        }
                        async resolveSignIn(e) {
                            return this.signInResolver(e)
                        }
                    };

                    function getMultiFactorResolver(e, t) {
                        var i;
                        let r = (0, n.m9)(e);
                        return _assert(t.customData.operationType, r, "argument-error"), _assert(null === (i = t.customData._serverResponse) || void 0 === i ? void 0 : i.mfaPendingCredential, r, "argument-error"), MultiFactorResolverImpl._fromError(r, t)
                    }
                    let MultiFactorUserImpl = class MultiFactorUserImpl {
                        constructor(e) {
                            this.user = e, this.enrolledFactors = [], e._onReload(t => {
                                t.mfaInfo && (this.enrolledFactors = t.mfaInfo.map(t => MultiFactorInfoImpl._fromServerResponse(e.auth, t)))
                            })
                        }
                        static _fromUser(e) {
                            return new MultiFactorUserImpl(e)
                        }
                        async getSession() {
                            return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user.auth)
                        }
                        async enroll(e, t) {
                            let i = await this.getSession(),
                                r = await _logoutIfInvalidated(this.user, e._process(this.user.auth, i, t));
                            return await this.user._updateTokensIfNecessary(r), this.user.reload()
                        }
                        async unenroll(e) {
                            let t = "string" == typeof e ? e : e.uid,
                                i = await this.user.getIdToken();
                            try {
                                var r;
                                let e = await _logoutIfInvalidated(this.user, (r = this.user.auth, _performApiRequest(r, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(r, {
                                    idToken: i,
                                    mfaEnrollmentId: t
                                }))));
                                this.enrolledFactors = this.enrolledFactors.filter(({
                                    uid: e
                                }) => e !== t), await this.user._updateTokensIfNecessary(e), await this.user.reload()
                            } catch (e) {
                                throw e
                            }
                        }
                    };
                    let E = new WeakMap;

                    function multiFactor(e) {
                        let t = (0, n.m9)(e);
                        return E.has(t) || E.set(t, MultiFactorUserImpl._fromUser(t)), E.get(t)
                    }
                    let y = "__sak";
                    let BrowserPersistenceClass = class BrowserPersistenceClass {
                        constructor(e, t) {
                            this.storageRetriever = e, this.type = t
                        }
                        _isAvailable() {
                            try {
                                if (!this.storage) return Promise.resolve(!1);
                                return this.storage.setItem(y, "1"), this.storage.removeItem(y), Promise.resolve(!0)
                            } catch (e) {
                                return Promise.resolve(!1)
                            }
                        }
                        _set(e, t) {
                            return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
                        }
                        _get(e) {
                            let t = this.storage.getItem(e);
                            return Promise.resolve(t ? JSON.parse(t) : null)
                        }
                        _remove(e) {
                            return this.storage.removeItem(e), Promise.resolve()
                        }
                        get storage() {
                            return this.storageRetriever()
                        }
                    };
                    let BrowserLocalPersistence = class BrowserLocalPersistence extends BrowserPersistenceClass {
                        constructor() {
                            super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
                                let e = (0, n.z$)();
                                return _isSafari(e) || _isIOS(e)
                            }() && function() {
                                try {
                                    return !!(window && window !== window.top)
                                } catch (e) {
                                    return !1
                                }
                            }(), this.fallbackToPolling = _isMobileBrowser(), this._shouldAllowMigration = !0
                        }
                        forAllChangedKeys(e) {
                            for (let t of Object.keys(this.listeners)) {
                                let i = this.storage.getItem(t),
                                    r = this.localCache[t];
                                i !== r && e(t, r, i)
                            }
                        }
                        onStorageEvent(e, t = !1) {
                            if (!e.key) {
                                this.forAllChangedKeys((e, t, i) => {
                                    this.notifyListeners(e, i)
                                });
                                return
                            }
                            let i = e.key;
                            if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
                                let r = this.storage.getItem(i);
                                if (e.newValue !== r) null !== e.newValue ? this.storage.setItem(i, e.newValue) : this.storage.removeItem(i);
                                else if (this.localCache[i] === e.newValue && !t) return
                            }
                            let triggerListeners = () => {
                                    let e = this.storage.getItem(i);
                                    (t || this.localCache[i] !== e) && this.notifyListeners(i, e)
                                },
                                r = this.storage.getItem(i);
                            (0, n.w1)() && 10 === document.documentMode && r !== e.newValue && e.newValue !== e.oldValue ? setTimeout(triggerListeners, 10) : triggerListeners()
                        }
                        notifyListeners(e, t) {
                            this.localCache[e] = t;
                            let i = this.listeners[e];
                            if (i)
                                for (let e of Array.from(i)) e(t ? JSON.parse(t) : t)
                        }
                        startPolling() {
                            this.stopPolling(), this.pollTimer = setInterval(() => {
                                this.forAllChangedKeys((e, t, i) => {
                                    this.onStorageEvent(new StorageEvent("storage", {
                                        key: e,
                                        oldValue: t,
                                        newValue: i
                                    }), !0)
                                })
                            }, 1e3)
                        }
                        stopPolling() {
                            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                        }
                        attachListener() {
                            window.addEventListener("storage", this.boundEventHandler)
                        }
                        detachListener() {
                            window.removeEventListener("storage", this.boundEventHandler)
                        }
                        _addListener(e, t) {
                            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
                        }
                        _removeListener(e, t) {
                            this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
                        }
                        async _set(e, t) {
                            await super._set(e, t), this.localCache[e] = JSON.stringify(t)
                        }
                        async _get(e) {
                            let t = await super._get(e);
                            return this.localCache[e] = JSON.stringify(t), t
                        }
                        async _remove(e) {
                            await super._remove(e), delete this.localCache[e]
                        }
                    };
                    BrowserLocalPersistence.type = "LOCAL";
                    let R = BrowserLocalPersistence;
                    let BrowserSessionPersistence = class BrowserSessionPersistence extends BrowserPersistenceClass {
                        constructor() {
                            super(() => window.sessionStorage, "SESSION")
                        }
                        _addListener(e, t) {}
                        _removeListener(e, t) {}
                    };
                    BrowserSessionPersistence.type = "SESSION";
                    let k = BrowserSessionPersistence;
                    let Receiver = class Receiver {
                        constructor(e) {
                            this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
                        }
                        static _getInstance(e) {
                            let t = this.receivers.find(t => t.isListeningto(e));
                            if (t) return t;
                            let i = new Receiver(e);
                            return this.receivers.push(i), i
                        }
                        isListeningto(e) {
                            return this.eventTarget === e
                        }
                        async handleEvent(e) {
                            let {
                                eventId: t,
                                eventType: i,
                                data: r
                            } = e.data, n = this.handlersMap[i];
                            if (!(null == n ? void 0 : n.size)) return;
                            e.ports[0].postMessage({
                                status: "ack",
                                eventId: t,
                                eventType: i
                            });
                            let s = Array.from(n).map(async t => t(e.origin, r)),
                                a = await Promise.all(s.map(async e => {
                                    try {
                                        let t = await e;
                                        return {
                                            fulfilled: !0,
                                            value: t
                                        }
                                    } catch (e) {
                                        return {
                                            fulfilled: !1,
                                            reason: e
                                        }
                                    }
                                }));
                            e.ports[0].postMessage({
                                status: "done",
                                eventId: t,
                                eventType: i,
                                response: a
                            })
                        }
                        _subscribe(e, t) {
                            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
                        }
                        _unsubscribe(e, t) {
                            this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
                        }
                    };

                    function _generateEventId(e = "", t = 10) {
                        let i = "";
                        for (let e = 0; e < t; e++) i += Math.floor(10 * Math.random());
                        return e + i
                    }
                    Receiver.receivers = [];
                    let Sender = class Sender {
                        constructor(e) {
                            this.target = e, this.handlers = new Set
                        }
                        removeMessageHandler(e) {
                            e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
                        }
                        async _send(e, t, i = 50) {
                            let r, n;
                            let s = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                            if (!s) throw Error("connection_unavailable");
                            return new Promise((a, o) => {
                                let l = _generateEventId("", 20);
                                s.port1.start();
                                let u = setTimeout(() => {
                                    o(Error("unsupported_event"))
                                }, i);
                                n = {
                                    messageChannel: s,
                                    onMessage(e) {
                                        if (e.data.eventId === l) switch (e.data.status) {
                                            case "ack":
                                                clearTimeout(u), r = setTimeout(() => {
                                                    o(Error("timeout"))
                                                }, 3e3);
                                                break;
                                            case "done":
                                                clearTimeout(r), a(e.data.response);
                                                break;
                                            default:
                                                clearTimeout(u), clearTimeout(r), o(Error("invalid_response"))
                                        }
                                    }
                                }, this.handlers.add(n), s.port1.addEventListener("message", n.onMessage), this.target.postMessage({
                                    eventType: e,
                                    eventId: l,
                                    data: t
                                }, [s.port2])
                            }).finally(() => {
                                n && this.removeMessageHandler(n)
                            })
                        }
                    };

                    function _window() {
                        return window
                    }

                    function _isWorker() {
                        return void 0 !== _window().WorkerGlobalScope && "function" == typeof _window().importScripts
                    }
                    async function _getActiveServiceWorker() {
                        if (!(null == navigator ? void 0 : navigator.serviceWorker)) return null;
                        try {
                            let e = await navigator.serviceWorker.ready;
                            return e.active
                        } catch (e) {
                            return null
                        }
                    }
                    let P = "firebaseLocalStorageDb",
                        S = "firebaseLocalStorage",
                        C = "fbase_key";
                    let DBPromise = class DBPromise {
                        constructor(e) {
                            this.request = e
                        }
                        toPromise() {
                            return new Promise((e, t) => {
                                this.request.addEventListener("success", () => {
                                    e(this.request.result)
                                }), this.request.addEventListener("error", () => {
                                    t(this.request.error)
                                })
                            })
                        }
                    };

                    function getObjectStore(e, t) {
                        return e.transaction([S], t ? "readwrite" : "readonly").objectStore(S)
                    }

                    function _openDatabase() {
                        let e = indexedDB.open(P, 1);
                        return new Promise((t, i) => {
                            e.addEventListener("error", () => {
                                i(e.error)
                            }), e.addEventListener("upgradeneeded", () => {
                                let t = e.result;
                                try {
                                    t.createObjectStore(S, {
                                        keyPath: C
                                    })
                                } catch (e) {
                                    i(e)
                                }
                            }), e.addEventListener("success", async () => {
                                let i = e.result;
                                i.objectStoreNames.contains(S) ? t(i) : (i.close(), await
                                    function() {
                                        let e = indexedDB.deleteDatabase(P);
                                        return new DBPromise(e).toPromise()
                                    }(), t(await _openDatabase()))
                            })
                        })
                    }
                    async function _putObject(e, t, i) {
                        let r = getObjectStore(e, !0).put({
                            [C]: t,
                            value: i
                        });
                        return new DBPromise(r).toPromise()
                    }
                    async function getObject(e, t) {
                        let i = getObjectStore(e, !1).get(t),
                            r = await new DBPromise(i).toPromise();
                        return void 0 === r ? null : r.value
                    }

                    function _deleteObject(e, t) {
                        let i = getObjectStore(e, !0).delete(t);
                        return new DBPromise(i).toPromise()
                    }
                    let IndexedDBLocalPersistence = class IndexedDBLocalPersistence {
                        constructor() {
                            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
                        }
                        async _openDb() {
                            return this.db || (this.db = await _openDatabase()), this.db
                        }
                        async _withRetries(e) {
                            let t = 0;
                            for (;;) try {
                                let t = await this._openDb();
                                return await e(t)
                            } catch (e) {
                                if (t++ > 3) throw e;
                                this.db && (this.db.close(), this.db = void 0)
                            }
                        }
                        async initializeServiceWorkerMessaging() {
                            return _isWorker() ? this.initializeReceiver() : this.initializeSender()
                        }
                        async initializeReceiver() {
                            this.receiver = Receiver._getInstance(_isWorker() ? self : null), this.receiver._subscribe("keyChanged", async (e, t) => {
                                let i = await this._poll();
                                return {
                                    keyProcessed: i.includes(t.key)
                                }
                            }), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"])
                        }
                        async initializeSender() {
                            var e, t;
                            if (this.activeServiceWorker = await _getActiveServiceWorker(), !this.activeServiceWorker) return;
                            this.sender = new Sender(this.activeServiceWorker);
                            let i = await this.sender._send("ping", {}, 800);
                            i && (null === (e = i[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = i[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
                        }
                        async notifyServiceWorker(e) {
                            var t;
                            if (this.sender && this.activeServiceWorker && ((null === (t = null == navigator ? void 0 : navigator.serviceWorker) || void 0 === t ? void 0 : t.controller) || null) === this.activeServiceWorker) try {
                                await this.sender._send("keyChanged", {
                                    key: e
                                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
                            } catch (e) {}
                        }
                        async _isAvailable() {
                            try {
                                if (!indexedDB) return !1;
                                let e = await _openDatabase();
                                return await _putObject(e, y, "1"), await _deleteObject(e, y), !0
                            } catch (e) {}
                            return !1
                        }
                        async _withPendingWrite(e) {
                            this.pendingWrites++;
                            try {
                                await e()
                            } finally {
                                this.pendingWrites--
                            }
                        }
                        async _set(e, t) {
                            return this._withPendingWrite(async () => (await this._withRetries(i => _putObject(i, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)))
                        }
                        async _get(e) {
                            let t = await this._withRetries(t => getObject(t, e));
                            return this.localCache[e] = t, t
                        }
                        async _remove(e) {
                            return this._withPendingWrite(async () => (await this._withRetries(t => _deleteObject(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
                        }
                        async _poll() {
                            let e = await this._withRetries(e => {
                                let t = getObjectStore(e, !1).getAll();
                                return new DBPromise(t).toPromise()
                            });
                            if (!e || 0 !== this.pendingWrites) return [];
                            let t = [],
                                i = new Set;
                            for (let {
                                    fbase_key: r,
                                    value: n
                                } of e) i.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(n) && (this.notifyListeners(r, n), t.push(r));
                            for (let e of Object.keys(this.localCache)) this.localCache[e] && !i.has(e) && (this.notifyListeners(e, null), t.push(e));
                            return t
                        }
                        notifyListeners(e, t) {
                            this.localCache[e] = t;
                            let i = this.listeners[e];
                            if (i)
                                for (let e of Array.from(i)) e(t)
                        }
                        startPolling() {
                            this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), 800)
                        }
                        stopPolling() {
                            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                        }
                        _addListener(e, t) {
                            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
                        }
                        _removeListener(e, t) {
                            this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling()
                        }
                    };
                    IndexedDBLocalPersistence.type = "LOCAL";
                    let b = IndexedDBLocalPersistence;
                    let MockReCaptcha = class MockReCaptcha {
                        constructor(e) {
                            this.auth = e, this.counter = 1e12, this._widgets = new Map
                        }
                        render(e, t) {
                            let i = this.counter;
                            return this._widgets.set(i, new MockWidget(e, this.auth.name, t || {})), this.counter++, i
                        }
                        reset(e) {
                            var t;
                            let i = e || 1e12;
                            null === (t = this._widgets.get(i)) || void 0 === t || t.delete(), this._widgets.delete(i)
                        }
                        getResponse(e) {
                            var t;
                            let i = e || 1e12;
                            return (null === (t = this._widgets.get(i)) || void 0 === t ? void 0 : t.getResponse()) || ""
                        }
                        async execute(e) {
                            var t;
                            let i = e || 1e12;
                            return null === (t = this._widgets.get(i)) || void 0 === t || t.execute(), ""
                        }
                    };
                    let MockWidget = class MockWidget {
                        constructor(e, t, i) {
                            this.params = i, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
                                this.execute()
                            };
                            let r = "string" == typeof e ? document.getElementById(e) : e;
                            _assert(r, "argument-error", {
                                appName: t
                            }), this.container = r, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
                        }
                        getResponse() {
                            return this.checkIfDeleted(), this.responseToken
                        }
                        delete() {
                            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
                        }
                        execute() {
                            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout(() => {
                                this.responseToken = function(e) {
                                    let t = [],
                                        i = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                    for (let e = 0; e < 50; e++) t.push(i.charAt(Math.floor(Math.random() * i.length)));
                                    return t.join("")
                                }(0);
                                let {
                                    callback: e,
                                    "expired-callback": t
                                } = this.params;
                                if (e) try {
                                    e(this.responseToken)
                                } catch (e) {}
                                this.timerId = window.setTimeout(() => {
                                    if (this.timerId = null, this.responseToken = null, t) try {
                                        t()
                                    } catch (e) {}
                                    this.isVisible && this.execute()
                                }, 6e4)
                            }, 500))
                        }
                        checkIfDeleted() {
                            if (this.deleted) throw Error("reCAPTCHA mock was already deleted!")
                        }
                    };
                    let N = _generateCallbackName("rcb"),
                        O = new Delay(3e4, 6e4);
                    let ReCaptchaLoaderImpl = class ReCaptchaLoaderImpl {
                        constructor() {
                            var e;
                            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (e = _window().grecaptcha) || void 0 === e ? void 0 : e.render)
                        }
                        load(e, t = "") {
                            return (_assert(t.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(t), e, "argument-error"), this.shouldResolveImmediately(t) && isV2(_window().grecaptcha)) ? Promise.resolve(_window().grecaptcha) : new Promise((i, r) => {
                                let s = _window().setTimeout(() => {
                                    r(_createError(e, "network-request-failed"))
                                }, O.get());
                                _window()[N] = () => {
                                    _window().clearTimeout(s), delete _window()[N];
                                    let n = _window().grecaptcha;
                                    if (!n || !isV2(n)) {
                                        r(_createError(e, "internal-error"));
                                        return
                                    }
                                    let a = n.render;
                                    n.render = (e, t) => {
                                        let i = a(e, t);
                                        return this.counter++, i
                                    }, this.hostLanguage = t, i(n)
                                };
                                let a = `https://www.google.com/recaptcha/api.js??${(0,n.xO)({onload:N,render:"explicit",hl:t})}`;
                                _loadJS(a).catch(() => {
                                    clearTimeout(s), r(_createError(e, "internal-error"))
                                })
                            })
                        }
                        clearedOneInstance() {
                            this.counter--
                        }
                        shouldResolveImmediately(e) {
                            var t;
                            return !!(null === (t = _window().grecaptcha) || void 0 === t ? void 0 : t.render) && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
                        }
                    };
                    let MockReCaptchaLoaderImpl = class MockReCaptchaLoaderImpl {
                        async load(e) {
                            return new MockReCaptcha(e)
                        }
                        clearedOneInstance() {}
                    };
                    let D = "recaptcha",
                        L = {
                            theme: "light",
                            type: "image"
                        };
                    let RecaptchaVerifier = class RecaptchaVerifier {
                        constructor(e, t = Object.assign({}, L), i) {
                            this.parameters = t, this.type = D, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = _castAuth(i), this.isInvisible = "invisible" === this.parameters.size, _assert("undefined" != typeof document, this.auth, "operation-not-supported-in-this-environment");
                            let r = "string" == typeof e ? document.getElementById(e) : e;
                            _assert(r, this.auth, "argument-error"), this.container = r, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl : new ReCaptchaLoaderImpl, this.validateStartingState()
                        }
                        async verify() {
                            this.assertNotDestroyed();
                            let e = await this.render(),
                                t = this.getAssertedRecaptcha(),
                                i = t.getResponse(e);
                            return i || new Promise(i => {
                                let tokenChange = e => {
                                    e && (this.tokenChangeListeners.delete(tokenChange), i(e))
                                };
                                this.tokenChangeListeners.add(tokenChange), this.isInvisible && t.execute(e)
                            })
                        }
                        render() {
                            try {
                                this.assertNotDestroyed()
                            } catch (e) {
                                return Promise.reject(e)
                            }
                            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch(e => {
                                throw this.renderPromise = null, e
                            })), this.renderPromise
                        }
                        _reset() {
                            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
                        }
                        clear() {
                            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach(e => {
                                this.container.removeChild(e)
                            })
                        }
                        validateStartingState() {
                            _assert(!this.parameters.sitekey, this.auth, "argument-error"), _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), _assert("undefined" != typeof document, this.auth, "operation-not-supported-in-this-environment")
                        }
                        makeTokenCallback(e) {
                            return t => {
                                if (this.tokenChangeListeners.forEach(e => e(t)), "function" == typeof e) e(t);
                                else if ("string" == typeof e) {
                                    let i = _window()[e];
                                    "function" == typeof i && i(t)
                                }
                            }
                        }
                        assertNotDestroyed() {
                            _assert(!this.destroyed, this.auth, "internal-error")
                        }
                        async makeRenderPromise() {
                            if (await this.init(), !this.widgetId) {
                                let e = this.container;
                                if (!this.isInvisible) {
                                    let t = document.createElement("div");
                                    e.appendChild(t), e = t
                                }
                                this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters)
                            }
                            return this.widgetId
                        }
                        async init() {
                            let e;
                            _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error"), await (e = null, new Promise(t => {
                                if ("complete" === document.readyState) {
                                    t();
                                    return
                                }
                                e = () => t(), window.addEventListener("load", e)
                            }).catch(t => {
                                throw e && window.removeEventListener("load", e), t
                            })), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
                            let t = await getRecaptchaParams(this.auth);
                            _assert(t, this.auth, "internal-error"), this.parameters.sitekey = t
                        }
                        getAssertedRecaptcha() {
                            return _assert(this.recaptcha, this.auth, "internal-error"), this.recaptcha
                        }
                    };
                    let ConfirmationResultImpl = class ConfirmationResultImpl {
                        constructor(e, t) {
                            this.verificationId = e, this.onConfirmation = t
                        }
                        confirm(e) {
                            let t = PhoneAuthCredential._fromVerification(this.verificationId, e);
                            return this.onConfirmation(t)
                        }
                    };
                    async function signInWithPhoneNumber(e, t, i) {
                        let r = _castAuth(e),
                            s = await _verifyPhoneNumber(r, t, (0, n.m9)(i));
                        return new ConfirmationResultImpl(s, e => signInWithCredential(r, e))
                    }
                    async function linkWithPhoneNumber(e, t, i) {
                        let r = (0, n.m9)(e);
                        await _assertLinkedStatus(!1, r, "phone");
                        let s = await _verifyPhoneNumber(r.auth, t, (0, n.m9)(i));
                        return new ConfirmationResultImpl(s, e => linkWithCredential(r, e))
                    }
                    async function reauthenticateWithPhoneNumber(e, t, i) {
                        let r = (0, n.m9)(e),
                            s = await _verifyPhoneNumber(r.auth, t, (0, n.m9)(i));
                        return new ConfirmationResultImpl(s, e => reauthenticateWithCredential(r, e))
                    }
                    async function _verifyPhoneNumber(e, t, i) {
                        var r, n, s;
                        let a = await i.verify();
                        try {
                            let o;
                            if (_assert("string" == typeof a, e, "argument-error"), _assert(i.type === D, e, "argument-error"), o = "string" == typeof t ? {
                                    phoneNumber: t
                                } : t, "session" in o) {
                                let t = o.session;
                                if ("phoneNumber" in o) {
                                    _assert("enroll" === t.type, e, "internal-error");
                                    let i = await (n = {
                                        idToken: t.credential,
                                        phoneEnrollmentInfo: {
                                            phoneNumber: o.phoneNumber,
                                            recaptchaToken: a
                                        }
                                    }, _performApiRequest(e, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(e, n)));
                                    return i.phoneSessionInfo.sessionInfo
                                } {
                                    _assert("signin" === t.type, e, "internal-error");
                                    let i = (null === (r = o.multiFactorHint) || void 0 === r ? void 0 : r.uid) || o.multiFactorUid;
                                    _assert(i, e, "missing-multi-factor-info");
                                    let n = await (s = {
                                        mfaPendingCredential: t.credential,
                                        mfaEnrollmentId: i,
                                        phoneSignInInfo: {
                                            recaptchaToken: a
                                        }
                                    }, _performApiRequest(e, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(e, s)));
                                    return n.phoneResponseInfo.sessionInfo
                                }
                            } {
                                let {
                                    sessionInfo: t
                                } = await sendPhoneVerificationCode(e, {
                                    phoneNumber: o.phoneNumber,
                                    recaptchaToken: a
                                });
                                return t
                            }
                        } finally {
                            i._reset()
                        }
                    }
                    async function updatePhoneNumber(e, t) {
                        await _link$1((0, n.m9)(e), t)
                    }
                    let PhoneAuthProvider = class PhoneAuthProvider {
                        constructor(e) {
                            this.providerId = PhoneAuthProvider.PROVIDER_ID, this.auth = _castAuth(e)
                        }
                        verifyPhoneNumber(e, t) {
                            return _verifyPhoneNumber(this.auth, e, (0, n.m9)(t))
                        }
                        static credential(e, t) {
                            return PhoneAuthCredential._fromVerification(e, t)
                        }
                        static credentialFromResult(e) {
                            return PhoneAuthProvider.credentialFromTaggedObject(e)
                        }
                        static credentialFromError(e) {
                            return PhoneAuthProvider.credentialFromTaggedObject(e.customData || {})
                        }
                        static credentialFromTaggedObject({
                            _tokenResponse: e
                        }) {
                            if (!e) return null;
                            let {
                                phoneNumber: t,
                                temporaryProof: i
                            } = e;
                            return t && i ? PhoneAuthCredential._fromTokenResponse(t, i) : null
                        }
                    };

                    function _withDefaultResolver(e, t) {
                        return t ? _getInstance(t) : (_assert(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver)
                    }
                    PhoneAuthProvider.PROVIDER_ID = "phone", PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
                    let IdpCredential = class IdpCredential extends AuthCredential {
                        constructor(e) {
                            super("custom", "custom"), this.params = e
                        }
                        _getIdTokenResponse(e) {
                            return signInWithIdp(e, this._buildIdpRequest())
                        }
                        _linkToIdToken(e, t) {
                            return signInWithIdp(e, this._buildIdpRequest(t))
                        }
                        _getReauthenticationResolver(e) {
                            return signInWithIdp(e, this._buildIdpRequest())
                        }
                        _buildIdpRequest(e) {
                            let t = {
                                requestUri: this.params.requestUri,
                                sessionId: this.params.sessionId,
                                postBody: this.params.postBody,
                                tenantId: this.params.tenantId,
                                pendingToken: this.params.pendingToken,
                                returnSecureToken: !0,
                                returnIdpCredential: !0
                            };
                            return e && (t.idToken = e), t
                        }
                    };

                    function _signIn(e) {
                        return _signInWithCredential(e.auth, new IdpCredential(e), e.bypassAuthState)
                    }

                    function _reauth(e) {
                        let {
                            auth: t,
                            user: i
                        } = e;
                        return _assert(i, t, "internal-error"), _reauthenticate(i, new IdpCredential(e), e.bypassAuthState)
                    }
                    async function _link(e) {
                        let {
                            auth: t,
                            user: i
                        } = e;
                        return _assert(i, t, "internal-error"), _link$1(i, new IdpCredential(e), e.bypassAuthState)
                    }
                    let AbstractPopupRedirectOperation = class AbstractPopupRedirectOperation {
                        constructor(e, t, i, r, n = !1) {
                            this.auth = e, this.resolver = i, this.user = r, this.bypassAuthState = n, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
                        }
                        execute() {
                            return new Promise(async (e, t) => {
                                this.pendingPromise = {
                                    resolve: e,
                                    reject: t
                                };
                                try {
                                    this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
                                } catch (e) {
                                    this.reject(e)
                                }
                            })
                        }
                        async onAuthEvent(e) {
                            let {
                                urlResponse: t,
                                sessionId: i,
                                postBody: r,
                                tenantId: n,
                                error: s,
                                type: a
                            } = e;
                            if (s) {
                                this.reject(s);
                                return
                            }
                            let o = {
                                auth: this.auth,
                                requestUri: t,
                                sessionId: i,
                                tenantId: n || void 0,
                                postBody: r || void 0,
                                user: this.user,
                                bypassAuthState: this.bypassAuthState
                            };
                            try {
                                this.resolve(await this.getIdpTask(a)(o))
                            } catch (e) {
                                this.reject(e)
                            }
                        }
                        onError(e) {
                            this.reject(e)
                        }
                        getIdpTask(e) {
                            switch (e) {
                                case "signInViaPopup":
                                case "signInViaRedirect":
                                    return _signIn;
                                case "linkViaPopup":
                                case "linkViaRedirect":
                                    return _link;
                                case "reauthViaPopup":
                                case "reauthViaRedirect":
                                    return _reauth;
                                default:
                                    _fail(this.auth, "internal-error")
                            }
                        }
                        resolve(e) {
                            this.pendingPromise || debugFail("Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
                        }
                        reject(e) {
                            this.pendingPromise || debugFail("Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
                        }
                        unregisterAndCleanUp() {
                            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
                        }
                    };
                    let M = new Delay(2e3, 1e4);
                    async function signInWithPopup(e, t, i) {
                        let r = _castAuth(e);
                        _assertInstanceOf(e, t, FederatedAuthProvider);
                        let n = _withDefaultResolver(r, i),
                            s = new PopupOperation(r, "signInViaPopup", t, n);
                        return s.executeNotNull()
                    }
                    async function reauthenticateWithPopup(e, t, i) {
                        let r = (0, n.m9)(e);
                        _assertInstanceOf(r.auth, t, FederatedAuthProvider);
                        let s = _withDefaultResolver(r.auth, i),
                            a = new PopupOperation(r.auth, "reauthViaPopup", t, s, r);
                        return a.executeNotNull()
                    }
                    async function linkWithPopup(e, t, i) {
                        let r = (0, n.m9)(e);
                        _assertInstanceOf(r.auth, t, FederatedAuthProvider);
                        let s = _withDefaultResolver(r.auth, i),
                            a = new PopupOperation(r.auth, "linkViaPopup", t, s, r);
                        return a.executeNotNull()
                    }
                    let PopupOperation = class PopupOperation extends AbstractPopupRedirectOperation {
                        constructor(e, t, i, r, n) {
                            super(e, t, r, n), this.provider = i, this.authWindow = null, this.pollId = null, PopupOperation.currentPopupAction && PopupOperation.currentPopupAction.cancel(), PopupOperation.currentPopupAction = this
                        }
                        async executeNotNull() {
                            let e = await this.execute();
                            return _assert(e, this.auth, "internal-error"), e
                        }
                        async onExecution() {
                            1 === this.filter.length || debugFail("Popup operations only handle one event");
                            let e = _generateEventId();
                            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch(e => {
                                this.reject(e)
                            }), this.resolver._isIframeWebStorageSupported(this.auth, e => {
                                e || this.reject(_createError(this.auth, "web-storage-unsupported"))
                            }), this.pollUserCancellation()
                        }
                        get eventId() {
                            var e;
                            return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
                        }
                        cancel() {
                            this.reject(_createError(this.auth, "cancelled-popup-request"))
                        }
                        cleanUp() {
                            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, PopupOperation.currentPopupAction = null
                        }
                        pollUserCancellation() {
                            let poll = () => {
                                var e, t;
                                if (null === (t = null === (e = this.authWindow) || void 0 === e ? void 0 : e.window) || void 0 === t ? void 0 : t.closed) {
                                    this.pollId = window.setTimeout(() => {
                                        this.pollId = null, this.reject(_createError(this.auth, "popup-closed-by-user"))
                                    }, 8e3);
                                    return
                                }
                                this.pollId = window.setTimeout(poll, M.get())
                            };
                            poll()
                        }
                    };
                    PopupOperation.currentPopupAction = null;
                    let U = new Map;
                    let RedirectAction = class RedirectAction extends AbstractPopupRedirectOperation {
                        constructor(e, t, i = !1) {
                            super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, i), this.eventId = null
                        }
                        async execute() {
                            let e = U.get(this.auth._key());
                            if (!e) {
                                try {
                                    let t = await _getAndClearPendingRedirectStatus(this.resolver, this.auth),
                                        i = t ? await super.execute() : null;
                                    e = () => Promise.resolve(i)
                                } catch (t) {
                                    e = () => Promise.reject(t)
                                }
                                U.set(this.auth._key(), e)
                            }
                            return this.bypassAuthState || U.set(this.auth._key(), () => Promise.resolve(null)), e()
                        }
                        async onAuthEvent(e) {
                            if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
                            if ("unknown" === e.type) {
                                this.resolve(null);
                                return
                            }
                            if (e.eventId) {
                                let t = await this.auth._redirectUserForId(e.eventId);
                                if (t) return this.user = t, super.onAuthEvent(e);
                                this.resolve(null)
                            }
                        }
                        async onExecution() {}
                        cleanUp() {}
                    };
                    async function _getAndClearPendingRedirectStatus(e, t) {
                        let i = pendingRedirectKey(t),
                            r = resolverPersistence(e);
                        if (!await r._isAvailable()) return !1;
                        let n = await r._get(i) === "true";
                        return await r._remove(i), n
                    }
                    async function _setPendingRedirectStatus(e, t) {
                        return resolverPersistence(e)._set(pendingRedirectKey(t), "true")
                    }

                    function _overrideRedirectResult(e, t) {
                        U.set(e._key(), t)
                    }

                    function resolverPersistence(e) {
                        return _getInstance(e._redirectPersistence)
                    }

                    function pendingRedirectKey(e) {
                        return _persistenceKeyName("pendingRedirect", e.config.apiKey, e.name)
                    }

                    function signInWithRedirect(e, t, i) {
                        return _signInWithRedirect(e, t, i)
                    }
                    async function _signInWithRedirect(e, t, i) {
                        let r = _castAuth(e);
                        _assertInstanceOf(e, t, FederatedAuthProvider), await r._initializationPromise;
                        let n = _withDefaultResolver(r, i);
                        return await _setPendingRedirectStatus(n, r), n._openRedirect(r, t, "signInViaRedirect")
                    }

                    function reauthenticateWithRedirect(e, t, i) {
                        return _reauthenticateWithRedirect(e, t, i)
                    }
                    async function _reauthenticateWithRedirect(e, t, i) {
                        let r = (0, n.m9)(e);
                        _assertInstanceOf(r.auth, t, FederatedAuthProvider), await r.auth._initializationPromise;
                        let s = _withDefaultResolver(r.auth, i);
                        await _setPendingRedirectStatus(s, r.auth);
                        let a = await prepareUserForRedirect(r);
                        return s._openRedirect(r.auth, t, "reauthViaRedirect", a)
                    }

                    function linkWithRedirect(e, t, i) {
                        return _linkWithRedirect(e, t, i)
                    }
                    async function _linkWithRedirect(e, t, i) {
                        let r = (0, n.m9)(e);
                        _assertInstanceOf(r.auth, t, FederatedAuthProvider), await r.auth._initializationPromise;
                        let s = _withDefaultResolver(r.auth, i);
                        await _assertLinkedStatus(!1, r, t.providerId), await _setPendingRedirectStatus(s, r.auth);
                        let a = await prepareUserForRedirect(r);
                        return s._openRedirect(r.auth, t, "linkViaRedirect", a)
                    }
                    async function getRedirectResult(e, t) {
                        return await _castAuth(e)._initializationPromise, _getRedirectResult(e, t, !1)
                    }
                    async function _getRedirectResult(e, t, i = !1) {
                        let r = _castAuth(e),
                            n = _withDefaultResolver(r, t),
                            s = new RedirectAction(r, n, i),
                            a = await s.execute();
                        return a && !i && (delete a.user._redirectEventId, await r._persistUserIfCurrent(a.user), await r._setRedirectUser(null, t)), a
                    }
                    async function prepareUserForRedirect(e) {
                        let t = _generateEventId(`${e.uid}:::`);
                        return e._redirectEventId = t, await e.auth._setRedirectUser(e), await e.auth._persistUserIfCurrent(e), t
                    }
                    let AuthEventManager = class AuthEventManager {
                        constructor(e) {
                            this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
                        }
                        registerConsumer(e) {
                            this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
                        }
                        unregisterConsumer(e) {
                            this.consumers.delete(e)
                        }
                        onEvent(e) {
                            if (this.hasEventBeenHandled(e)) return !1;
                            let t = !1;
                            return this.consumers.forEach(i => {
                                this.isEventForConsumer(e, i) && (t = !0, this.sendToConsumer(e, i), this.saveEventToCache(e))
                            }), this.hasHandledPotentialRedirect || ! function(e) {
                                switch (e.type) {
                                    case "signInViaRedirect":
                                    case "linkViaRedirect":
                                    case "reauthViaRedirect":
                                        return !0;
                                    case "unknown":
                                        return isNullRedirectEvent(e);
                                    default:
                                        return !1
                                }
                            }(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
                        }
                        sendToConsumer(e, t) {
                            var i;
                            if (e.error && !isNullRedirectEvent(e)) {
                                let r = (null === (i = e.error.code) || void 0 === i ? void 0 : i.split("auth/")[1]) || "internal-error";
                                t.onError(_createError(this.auth, r))
                            } else t.onAuthEvent(e)
                        }
                        isEventForConsumer(e, t) {
                            let i = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
                            return t.filter.includes(e.type) && i
                        }
                        hasEventBeenHandled(e) {
                            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(eventUid(e))
                        }
                        saveEventToCache(e) {
                            this.cachedEventUids.add(eventUid(e)), this.lastProcessedEventTime = Date.now()
                        }
                    };

                    function eventUid(e) {
                        return [e.type, e.eventId, e.sessionId, e.tenantId].filter(e => e).join("-")
                    }

                    function isNullRedirectEvent({
                        type: e,
                        error: t
                    }) {
                        return "unknown" === e && (null == t ? void 0 : t.code) === "auth/no-auth-event"
                    }
                    async function _getProjectConfig(e, t = {}) {
                        return _performApiRequest(e, "GET", "/v1/projects", t)
                    }
                    let F = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                        W = /^https?/;
                    async function _validateOrigin(e) {
                        if (e.config.emulator) return;
                        let {
                            authorizedDomains: t
                        } = await _getProjectConfig(e);
                        for (let e of t) try {
                            if (function(e) {
                                    let t = _getCurrentUrl(),
                                        {
                                            protocol: i,
                                            hostname: r
                                        } = new URL(t);
                                    if (e.startsWith("chrome-extension://")) {
                                        let n = new URL(e);
                                        return "" === n.hostname && "" === r ? "chrome-extension:" === i && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === i && n.hostname === r
                                    }
                                    if (!W.test(i)) return !1;
                                    if (F.test(e)) return r === e;
                                    let n = e.replace(/\./g, "\\."),
                                        s = RegExp("^(.+\\." + n + "|" + n + ")$", "i");
                                    return s.test(r)
                                }(e)) return
                        } catch (e) {}
                        _fail(e, "unauthorized-domain")
                    }
                    let V = new Delay(3e4, 6e4);

                    function resetUnloadedGapiModules() {
                        let e = _window().___jsl;
                        if (null == e ? void 0 : e.H) {
                            for (let t of Object.keys(e.H))
                                if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [...e.H[t].L], e.CP)
                                    for (let t = 0; t < e.CP.length; t++) e.CP[t] = null
                        }
                    }
                    let x = null,
                        q = new Delay(5e3, 15e3),
                        j = {
                            style: {
                                position: "absolute",
                                top: "-100px",
                                width: "1px",
                                height: "1px"
                            },
                            "aria-hidden": "true",
                            tabindex: "-1"
                        },
                        H = new Map([
                            ["identitytoolkit.googleapis.com", "p"],
                            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
                            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
                        ]);
                    async function _openIframe(e) {
                        let t = await (x = x || new Promise((t, i) => {
                                var r, n, s;

                                function loadGapiIframe() {
                                    resetUnloadedGapiModules(), gapi.load("gapi.iframes", {
                                        callback: () => {
                                            t(gapi.iframes.getContext())
                                        },
                                        ontimeout: () => {
                                            resetUnloadedGapiModules(), i(_createError(e, "network-request-failed"))
                                        },
                                        timeout: V.get()
                                    })
                                }
                                if (null === (n = null === (r = _window().gapi) || void 0 === r ? void 0 : r.iframes) || void 0 === n ? void 0 : n.Iframe) t(gapi.iframes.getContext());
                                else if (null === (s = _window().gapi) || void 0 === s ? void 0 : s.load) loadGapiIframe();
                                else {
                                    let t = _generateCallbackName("iframefcb");
                                    return _window()[t] = () => {
                                        gapi.load ? loadGapiIframe() : i(_createError(e, "network-request-failed"))
                                    }, _loadJS(`https://apis.google.com/js/api.js?onload=${t}`).catch(e => i(e))
                                }
                            }).catch(e => {
                                throw x = null, e
                            })),
                            i = _window().gapi;
                        return _assert(i, e, "internal-error"), t.open({
                            where: document.body,
                            url: function(e) {
                                let t = e.config;
                                _assert(t.authDomain, e, "auth-domain-config-required");
                                let i = t.emulator ? _emulatorUrl(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`,
                                    r = {
                                        apiKey: t.apiKey,
                                        appName: e.name,
                                        v: s.Jn
                                    },
                                    a = H.get(e.config.apiHost);
                                a && (r.eid = a);
                                let o = e._getFrameworks();
                                return o.length && (r.fw = o.join(",")), `${i}?${(0,n.xO)(r).slice(1)}`
                            }(e),
                            messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                            attributes: j,
                            dontclear: !0
                        }, t => new Promise(async (i, r) => {
                            await t.restyle({
                                setHideOnLeave: !1
                            });
                            let n = _createError(e, "network-request-failed"),
                                s = _window().setTimeout(() => {
                                    r(n)
                                }, q.get());

                            function clearTimerAndResolve() {
                                _window().clearTimeout(s), i(t)
                            }
                            t.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
                                r(n)
                            })
                        }))
                    }
                    let G = {
                        location: "yes",
                        resizable: "yes",
                        statusbar: "yes",
                        toolbar: "no"
                    };
                    let AuthPopup = class AuthPopup {
                        constructor(e) {
                            this.window = e, this.associatedEvent = null
                        }
                        close() {
                            if (this.window) try {
                                this.window.close()
                            } catch (e) {}
                        }
                    };
                    let z = encodeURIComponent("fac");
                    async function _getRedirectUrl(e, t, i, r, a, o) {
                        _assert(e.config.authDomain, e, "auth-domain-config-required"), _assert(e.config.apiKey, e, "invalid-api-key");
                        let l = {
                            apiKey: e.config.apiKey,
                            appName: e.name,
                            authType: i,
                            redirectUrl: r,
                            v: s.Jn,
                            eventId: a
                        };
                        if (t instanceof FederatedAuthProvider)
                            for (let [i, r] of (t.setDefaultLanguage(e.languageCode), l.providerId = t.providerId || "", (0, n.xb)(t.getCustomParameters()) || (l.customParameters = JSON.stringify(t.getCustomParameters())), Object.entries(o || {}))) l[i] = r;
                        if (t instanceof BaseOAuthProvider) {
                            let e = t.getScopes().filter(e => "" !== e);
                            e.length > 0 && (l.scopes = e.join(","))
                        }
                        for (let t of (e.tenantId && (l.tid = e.tenantId), Object.keys(l))) void 0 === l[t] && delete l[t];
                        let u = await e._getAppCheckToken(),
                            c = u ? `#${z}=${encodeURIComponent(u)}` : "";
                        return `${function({config:e}){return e.emulator?_emulatorUrl(e,"emulator/auth/handler"):`
                        https: //${e.authDomain}/__/auth/handler`}(e)}?${(0,n.xO)(l).slice(1)}${c}`}
                            let B = "webStorageSupport",
                                $ = class {
                                    constructor() {
                                        this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = k, this._completeRedirectFn = _getRedirectResult, this._overrideRedirectResult = _overrideRedirectResult
                                    }
                                    async _openPopup(e, t, i, r) {
                                        var s;
                                        (null === (s = this.eventManagers[e._key()]) || void 0 === s ? void 0 : s.manager) || debugFail("_initialize() not called before _openPopup()");
                                        let a = await _getRedirectUrl(e, t, i, _getCurrentUrl(), r);
                                        return function(e, t, i, r = 500, s = 600) {
                                            let a = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
                                                o = Math.max((window.screen.availWidth - r) / 2, 0).toString(),
                                                l = "",
                                                u = Object.assign(Object.assign({}, G), {
                                                    width: r.toString(),
                                                    height: s.toString(),
                                                    top: a,
                                                    left: o
                                                }),
                                                c = (0, n.z$)().toLowerCase();
                                            i && (l = _isChromeIOS(c) ? "_blank" : i), _isFirefox(c) && (t = t || "http://localhost", u.scrollbars = "yes");
                                            let d = Object.entries(u).reduce((e, [t, i]) => `${e}${t}=${i},`, "");
                                            if (function(e = (0, n.z$)()) {
                                                    var t;
                                                    return _isIOS(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone)
                                                }(c) && "_self" !== l) return function(e, t) {
                                                let i = document.createElement("a");
                                                i.href = e, i.target = t;
                                                let r = document.createEvent("MouseEvent");
                                                r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), i.dispatchEvent(r)
                                            }(t || "", l), new AuthPopup(null);
                                            let h = window.open(t || "", l, d);
                                            _assert(h, e, "popup-blocked");
                                            try {
                                                h.focus()
                                            } catch (e) {}
                                            return new AuthPopup(h)
                                        }(e, a, _generateEventId())
                                    }
                                    async _openRedirect(e, t, i, r) {
                                        await this._originValidation(e);
                                        let n = await _getRedirectUrl(e, t, i, _getCurrentUrl(), r);
                                        return _window().location.href = n, new Promise(() => {})
                                    }
                                    _initialize(e) {
                                        let t = e._key();
                                        if (this.eventManagers[t]) {
                                            let {
                                                manager: e,
                                                promise: i
                                            } = this.eventManagers[t];
                                            return e ? Promise.resolve(e) : (i || debugFail("If manager is not set, promise should be"), i)
                                        }
                                        let i = this.initAndGetManager(e);
                                        return this.eventManagers[t] = {
                                            promise: i
                                        }, i.catch(() => {
                                            delete this.eventManagers[t]
                                        }), i
                                    }
                                    async initAndGetManager(e) {
                                        let t = await _openIframe(e),
                                            i = new AuthEventManager(e);
                                        return t.register("authEvent", t => {
                                            _assert(null == t ? void 0 : t.authEvent, e, "invalid-auth-event");
                                            let r = i.onEvent(t.authEvent);
                                            return {
                                                status: r ? "ACK" : "ERROR"
                                            }
                                        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {
                                            manager: i
                                        }, this.iframes[e._key()] = t, i
                                    }
                                    _isIframeWebStorageSupported(e, t) {
                                        let i = this.iframes[e._key()];
                                        i.send(B, {
                                            type: B
                                        }, i => {
                                            var r;
                                            let n = null === (r = null == i ? void 0 : i[0]) || void 0 === r ? void 0 : r[B];
                                            void 0 !== n && t(!!n), _fail(e, "internal-error")
                                        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
                                    }
                                    _originValidation(e) {
                                        let t = e._key();
                                        return this.originValidationPromises[t] || (this.originValidationPromises[t] = _validateOrigin(e)), this.originValidationPromises[t]
                                    }
                                    get _shouldInitProactively() {
                                        return _isMobileBrowser() || _isSafari() || _isIOS()
                                    }
                                };
                        let MultiFactorAssertionImpl = class MultiFactorAssertionImpl {
                            constructor(e) {
                                this.factorId = e
                            }
                            _process(e, t, i) {
                                switch (t.type) {
                                    case "enroll":
                                        return this._finalizeEnroll(e, t.credential, i);
                                    case "signin":
                                        return this._finalizeSignIn(e, t.credential);
                                    default:
                                        return debugFail("unexpected MultiFactorSessionType")
                                }
                            }
                        };
                        let PhoneMultiFactorAssertionImpl = class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
                            constructor(e) {
                                super("phone"), this.credential = e
                            }
                            static _fromCredential(e) {
                                return new PhoneMultiFactorAssertionImpl(e)
                            }
                            _finalizeEnroll(e, t, i) {
                                return _performApiRequest(e, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(e, {
                                    idToken: t,
                                    displayName: i,
                                    phoneVerificationInfo: this.credential._makeVerificationRequest()
                                }))
                            }
                            _finalizeSignIn(e, t) {
                                return _performApiRequest(e, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(e, {
                                    mfaPendingCredential: t,
                                    phoneVerificationInfo: this.credential._makeVerificationRequest()
                                }))
                            }
                        };
                        let PhoneMultiFactorGenerator = class PhoneMultiFactorGenerator {
                            constructor() {}
                            static assertion(e) {
                                return PhoneMultiFactorAssertionImpl._fromCredential(e)
                            }
                        };
                        PhoneMultiFactorGenerator.FACTOR_ID = "phone";
                        let TotpMultiFactorGenerator = class TotpMultiFactorGenerator {
                            static assertionForEnrollment(e, t) {
                                return TotpMultiFactorAssertionImpl._fromSecret(e, t)
                            }
                            static assertionForSignIn(e, t) {
                                return TotpMultiFactorAssertionImpl._fromEnrollmentId(e, t)
                            }
                            static async generateSecret(e) {
                                var t;
                                _assert(void 0 !== e.auth, "internal-error");
                                let i = await _performApiRequest(t = e.auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(t, {
                                    idToken: e.credential,
                                    totpEnrollmentInfo: {}
                                }));
                                return TotpSecret._fromStartTotpMfaEnrollmentResponse(i, e.auth)
                            }
                        };
                        TotpMultiFactorGenerator.FACTOR_ID = "totp";
                        let TotpMultiFactorAssertionImpl = class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
                            constructor(e, t, i) {
                                super("totp"), this.otp = e, this.enrollmentId = t, this.secret = i
                            }
                            static _fromSecret(e, t) {
                                return new TotpMultiFactorAssertionImpl(t, void 0, e)
                            }
                            static _fromEnrollmentId(e, t) {
                                return new TotpMultiFactorAssertionImpl(t, e)
                            }
                            async _finalizeEnroll(e, t, i) {
                                return _assert(void 0 !== this.secret, e, "argument-error"), _performApiRequest(e, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(e, {
                                    idToken: t,
                                    displayName: i,
                                    totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
                                }))
                            }
                            async _finalizeSignIn(e, t) {
                                _assert(void 0 !== this.enrollmentId && void 0 !== this.otp, e, "argument-error");
                                let i = {
                                    verificationCode: this.otp
                                };
                                return _performApiRequest(e, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(e, {
                                    mfaPendingCredential: t,
                                    mfaEnrollmentId: this.enrollmentId,
                                    totpVerificationInfo: i
                                }))
                            }
                        };
                        let TotpSecret = class TotpSecret {
                            constructor(e, t, i, r, n, s, a) {
                                this.sessionInfo = s, this.auth = a, this.secretKey = e, this.hashingAlgorithm = t, this.codeLength = i, this.codeIntervalSeconds = r, this.enrollmentCompletionDeadline = n
                            }
                            static _fromStartTotpMfaEnrollmentResponse(e, t) {
                                return new TotpSecret(e.totpSessionInfo.sharedSecretKey, e.totpSessionInfo.hashingAlgorithm, e.totpSessionInfo.verificationCodeLength, e.totpSessionInfo.periodSec, new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), e.totpSessionInfo.sessionInfo, t)
                            }
                            _makeTotpVerificationInfo(e) {
                                return {
                                    sessionInfo: this.sessionInfo,
                                    verificationCode: e
                                }
                            }
                            generateQrCodeUrl(e, t) {
                                var i;
                                let r = !1;
                                return (_isEmptyString(e) || _isEmptyString(t)) && (r = !0), r && (_isEmptyString(e) && (e = (null === (i = this.auth.currentUser) || void 0 === i ? void 0 : i.email) || "unknownuser"), _isEmptyString(t) && (t = this.auth.name)), `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`
                            }
                        };

                        function _isEmptyString(e) {
                            return void 0 === e || (null == e ? void 0 : e.length) === 0
                        }
                        var K = "@firebase/auth",
                            J = "0.23.2";
                        let AuthInterop = class AuthInterop {
                            constructor(e) {
                                this.auth = e, this.internalListeners = new Map
                            }
                            getUid() {
                                var e;
                                return this.assertAuthConfigured(), (null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.uid) || null
                            }
                            async getToken(e) {
                                if (this.assertAuthConfigured(), await this.auth._initializationPromise, !this.auth.currentUser) return null;
                                let t = await this.auth.currentUser.getIdToken(e);
                                return {
                                    accessToken: t
                                }
                            }
                            addAuthTokenListener(e) {
                                if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
                                let t = this.auth.onIdTokenChanged(t => {
                                    e((null == t ? void 0 : t.stsTokenManager.accessToken) || null)
                                });
                                this.internalListeners.set(e, t), this.updateProactiveRefresh()
                            }
                            removeAuthTokenListener(e) {
                                this.assertAuthConfigured();
                                let t = this.internalListeners.get(e);
                                t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh())
                            }
                            assertAuthConfigured() {
                                _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
                            }
                            updateProactiveRefresh() {
                                this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
                            }
                        };
                        let Y = (0, n.Pz)("authIdTokenMaxAge") || 300,
                            X = null,
                            mintCookieFactory = e => async t => {
                                let i = t && await t.getIdTokenResult(),
                                    r = i && (new Date().getTime() - Date.parse(i.issuedAtTime)) / 1e3;
                                if (r && r > Y) return;
                                let n = null == i ? void 0 : i.token;
                                X !== n && (X = n, await fetch(e, {
                                    method: n ? "POST" : "DELETE",
                                    headers: n ? {
                                        Authorization: `Bearer ${n}`
                                    } : {}
                                }))
                            };

                        function getAuth(e = (0, s.Mq)()) {
                            let t = (0, s.qX)(e, "auth");
                            if (t.isInitialized()) return t.getImmediate();
                            let i = initializeAuth(e, {
                                    popupRedirectResolver: $,
                                    persistence: [b, R, k]
                                }),
                                r = (0, n.Pz)("authTokenSyncURL");
                            if (r) {
                                let e = mintCookieFactory(r);
                                beforeAuthStateChanged(i, e, () => e(i.currentUser)), onIdTokenChanged(i, t => e(t))
                            }
                            let a = (0, n.q4)("auth");
                            return a && connectAuthEmulator(i, `http://${a}`), i
                        }
                        r = "Browser", (0, s.Xd)(new l.wA("auth", (e, {
                            options: t
                        }) => {
                            let i = e.getProvider("app").getImmediate(),
                                n = e.getProvider("heartbeat"),
                                s = e.getProvider("app-check-internal"),
                                {
                                    apiKey: a,
                                    authDomain: o
                                } = i.options;
                            _assert(a && !a.includes(":"), "invalid-api-key", {
                                appName: i.name
                            });
                            let l = {
                                    apiKey: a,
                                    authDomain: o,
                                    clientPlatform: r,
                                    apiHost: "identitytoolkit.googleapis.com",
                                    tokenApiHost: "securetoken.googleapis.com",
                                    apiScheme: "https",
                                    sdkClientVersion: _getClientVersion(r)
                                },
                                u = new AuthImpl(i, n, s, l);
                            return function(e, t) {
                                let i = (null == t ? void 0 : t.persistence) || [],
                                    r = (Array.isArray(i) ? i : [i]).map(_getInstance);
                                (null == t ? void 0 : t.errorMap) && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(r, null == t ? void 0 : t.popupRedirectResolver)
                            }(u, t), u
                        }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, i) => {
                            let r = e.getProvider("auth-internal");
                            r.initialize()
                        })), (0, s.Xd)(new l.wA("auth-internal", e => {
                            let t = _castAuth(e.getProvider("auth").getImmediate());
                            return new AuthInterop(t)
                        }, "PRIVATE").setInstantiationMode("EXPLICIT")), (0, s.KN)(K, J, function(e) {
                            switch (e) {
                                case "Node":
                                    return "node";
                                case "ReactNative":
                                    return "rn";
                                case "Worker":
                                    return "webworker";
                                case "Cordova":
                                    return "cordova";
                                default:
                                    return
                            }
                        }(r)), (0, s.KN)(K, J, "esm2017")
                    }
                }]);