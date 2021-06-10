import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
      login(input: $input)
    }
`
export const useLoginMutation = () => {
  const [loginMutation, dataLogin] = useMutation(LOGIN)

  return { loginMutation, dataLogin}
}
