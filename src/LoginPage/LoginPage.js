import './LoginPage.css';

export default function LoginPage() {
	return (
		<>
			<form>
				<h1>Login</h1>
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
}