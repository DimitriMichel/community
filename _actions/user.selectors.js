import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';
import { authenticatedUserAtom, usersAtom, userAtom } from '@_state';
import * as SecureStore from 'expo-secure-store';
import { axios } from '@axios';
import {ProgressBarAndroidComponent} from 'react-native';

export const userActions = () => {
    const [authenticatedUser, setAuthenticatedUser] = useRecoilState(authenticatedUserAtom);
    const setUser = useSetRecoilState(userAtom);
    /**
     *
     * @info Encrypt and securely store key–value pairs locally on the device (https://docs.expo.dev/versions/latest/sdk/securestore/)
     *
     */
    const Storage = SecureStore;
    /**
     *
     *  @info Cross Site Request Forgery Token (https://laravel.com/docs/9.x/csrf)
     *
     */
    const crossSiteRequestForgeryToken = () => axios.get('/sanctum/csrf-cookie')
    /**
     *
     * @info Login User
     *
     */
    async function login({setErrors, ...props}) {
        await crossSiteRequestForgeryToken()
        setErrors([])

        axios
            .post('/login', props)
            .then((res) => {
                const {token, id, email} = res.data;
                const user = {
                    token: token,
                    id: id,
                    email: email
                }
                setAuthenticatedUser(user)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors);
            })
    }
    /**
     *
     * @info Logout Authenticated User
     *
     */
    async function logout() {
        if (!error) {
            await axios
                .post('/logout')
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }

}