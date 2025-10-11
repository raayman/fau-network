export default function SignUpPage() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <label>Confirm Password</label>
        <input type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
