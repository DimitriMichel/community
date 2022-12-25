import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useGetUserQuery } from "../_api/user/user";
import { useGetTokenQuery, useLoginMutation } from "../_api/authentication/authentication";

const MyComponent = () => {
  // const { data, error, isLoading } = useGetUserQuery("11");


  const [login, { data, isLoading, error }] = useLoginMutation();


  console.log(login({ email: "test@example.com", password: "password"}).then(res => console.log(res)))


  console.log(data);
 // console.log(login({ email: "test@example.com", password: "password" }).then(res => console.log(res)));
  const [getToken, { token }] = useGetTokenQuery();
//  console.log(getToken().then(res => console.log(res)).catch(err => console.log(err)));


  console.log(data);
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};


export default MyComponent;
