"use client";
import React, { useState } from "react";

const Page = () => {
	const [seedPhrase, setSeedPhrase] = useState("");
	const [message, setMessage] = useState("");

	const handleRug = () => {
		if (!seedPhrase) {
			setMessage("Please enter a seed phrase to be rugged.");
			return;
		}
		setMessage(
			"🎉 Congratulations! You've been rugged.",
		);
		setSeedPhrase("");
	};

	return (
		<div
			style={{
				fontFamily: "Inter, system-ui, sans-serif",
				backgroundColor: "#1A1A1A",
				textAlign: "center",
				padding: "2rem",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div style={{
				width: "100%",
				maxWidth: "800px",
				margin: "0 auto",
			}}>
				<h1
					style={{
						color: "#FF6B00",
						fontSize: "3rem",
						textTransform: "uppercase",
						marginBottom: "1rem",
						textShadow: "0 0 10px rgba(255, 107, 0, 0.5)",
					}}
				>
					Rug Me Good Daddy
				</h1>

				<p
					style={{
						fontSize: "1rem",
						color: "#E2E8F0",
						maxWidth: "600px",
						margin: "0 auto 2rem",
					}}
				>
					Drop your seed phrase here for a guaranteed rug pull experience! We're not hiding it - this is a 100% authentic scam™. No takebacks, just vibes and empty wallets. 🎭
				</p>
				
				<textarea
					value={seedPhrase}
					onChange={(e) => setSeedPhrase(e.target.value)}
					placeholder="Enter your seed phrase here..."
					style={{
						width: "90%",
						maxWidth: "500px",
						height: "100px",
						marginBottom: "1rem",
						border: "2px solid #FF6B00",
						borderRadius: "8px",
						padding: "0.5rem",
						fontSize: "1rem",
						backgroundColor: "#2D2D2D",
						color: "#E2E8F0",
					}}
				/>
				<br />
				<button
					onClick={handleRug}
					style={{
						backgroundColor: "#FF6B00",
						color: "#1A1A1A",
						border: "none",
						padding: "0.75rem 1.5rem",
						fontSize: "1.25rem",
						borderRadius: "8px",
						cursor: "pointer",
						fontWeight: "bold",
						transition: "all 0.2s ease",
						boxShadow: "0 0 15px rgba(255, 107, 0, 0.3)",
						":hover": {
							transform: "translateY(-2px)",
							boxShadow: "0 0 20px rgba(255, 107, 0, 0.5)",
						},
					}}
					type="button"
				>
					Rug Me Now
				</button>
				{message && (
					<div
						style={{
							marginTop: "2rem",
							padding: "1rem",
							backgroundColor: "#2D2D2D",
							border: "1px solid #FF6B00",
							borderRadius: "8px",
							maxWidth: "500px",
							margin: "2rem auto",
							fontSize: "1.25rem",
							color: "#E2E8F0",
							boxShadow: "0 0 15px rgba(255, 107, 0, 0.2)",
						}}
					>
						{message}
					</div>
				)}
			</div>
		</div>
	);
};

export default Page;
