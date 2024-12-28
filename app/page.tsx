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
			"🎉 Congratulations! You've been rugged. Your funds are now swimming in the ether. Thanks for participating in this 100% intentional service!",
		);
		setSeedPhrase("");
	};

	return (
		<div
			style={{
				fontFamily: "'Comic Sans MS', cursive, sans-serif",
				backgroundColor: "#f5f5f5",
				textAlign: "center",
				padding: "2rem",
			}}
		>
			<h1
				style={{
					color: "#FF0000",
					fontSize: "3rem",
					textTransform: "uppercase",
					marginBottom: "1rem",
				}}
			>
				Rug Me Good Daddy 💸
			</h1>

			<p
				style={{
					fontSize: "1rem",
					color: "#333",
					maxWidth: "600px",
					margin: "0 auto 2rem",
				}}
			>
				Enter your seed phrase below, and we promise you’ll be rugged. This is
				not a scam; it’s a service. Warning: by submitting your seed phrase, you
				agree to being rugged 100%. No refunds.
			</p>
			<div
				style={{
					border: "2px solid red",
					padding: "1rem",
					borderRadius: "8px",
					margin: "1rem auto",
					maxWidth: "400px",
					backgroundColor: "#FFF8F8",
				}}
			>
				<h3 style={{ color: "#FF0000" }}>⚠️ Warning ⚠️</h3>
				<p>
					By entering your seed phrase, you are agreeing to lose all funds.
					Think twice. Actually, think thrice.
				</p>
			</div>
			<textarea
				value={seedPhrase}
				onChange={(e) => setSeedPhrase(e.target.value)}
				placeholder="Enter your seed phrase here..."
				style={{
					width: "90%",
					maxWidth: "500px",
					height: "100px",
					marginBottom: "1rem",
					border: "2px solid #ddd",
					borderRadius: "4px",
					padding: "0.5rem",
					fontSize: "1rem",
				}}
			/>
			<br />
			<button
				onClick={handleRug}
				style={{
					backgroundColor: "#FF0000",
					color: "#FFF",
					border: "none",
					padding: "0.75rem 1.5rem",
					fontSize: "1.25rem",
					borderRadius: "4px",
					cursor: "pointer",
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
						backgroundColor: "#FFFAF0",
						border: "1px solid #FFA500",
						borderRadius: "4px",
						maxWidth: "500px",
						margin: "2rem auto",
						fontSize: "1.25rem",
						color: "#333",
					}}
				>
					{message}
				</div>
			)}
		</div>
	);
};

export default Page;
