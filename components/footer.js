export default function Footer() {
		return(
			<footer className="text-center text-muted">
				<hr />
				<p>&copy; 2025 | Version {process.env.VERSION}</p>
			</footer>
		)
}
