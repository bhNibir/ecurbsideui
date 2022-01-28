import React from 'react';
import { useParams } from 'react-router-dom';

// const VERIFY_EMAIL = gql`
//     mutation verifyAccount($token: String!) {
//         verifyAccount(token: $token) {
//             success
//             errors
//         }
//     }
// `;

const VerifyAccount = () => {
    const { token } = useParams();

    // const [verifyAccount, { data }] = useMutation(VERIFY_EMAIL);

    // useEffect(() => {
    //     verifyAccount({ variables: { token } });
    // }, [token, verifyAccount]);

    return (
        <>
            <p>{token}</p>
            <h1>Verify</h1>
        </>
    );
};

export default VerifyAccount;
