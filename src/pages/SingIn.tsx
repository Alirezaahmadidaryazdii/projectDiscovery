import theme from "../components/theme";
import BodySign from "../layouts/BodySing";
import HeaderSign from "../layouts/HeaderSign";

function SignIn(){
    const elments={
        title: 'Sign in to ProjectDiscovery Cloud Platform',
        caption: 'Detect the vulnerabilities that matter most.',
        accounts: ['Github', 'Google']
    }
    return(
        <div style={{color: 'white', background: theme.palette.background.paper, overflowY: 'hidden'}}>
            {/* <HeaderSign /> */}
            <BodySign {...elments} />
        </div>
    )
}
export default SignIn;
