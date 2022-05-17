import './SignupPage.css';

export default function SignupPage() {
	return (
		<>
			<form>
				<h1>Signup</h1>
				<label>Username:</label>
				<input type="text" name="username" required></input>
				<label>Email:</label>
				<input type="text" name="email" required></input>
				<label>Password:</label>
				<input type="text" name="password" required></input>
				<button type="submit">Submit</button>
			</form>
		</>
	)
};