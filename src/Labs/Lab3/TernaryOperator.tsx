export default function IfElse() {
        let loggedIn = true;
    return (
        <div id="wd-ternary-operator">
            <h4>Logged In</h4>
            {loggedIn ? <p>Welcome</p> : <p>Please login</p>} <hr />
        </div>
    );
}