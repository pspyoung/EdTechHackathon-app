import React from 'react';
import './Meditate.css';
import { Card, Button } from 'react-bootstrap';

function Meditate(props) {
	return (
		<div className="App">
			<div class="container h-100">
				<div class="row align-items-center h-100">
					<div class="col-6 mx-auto">
						<Card
							class="h-100 border-primary justify-content-center"
							style={{ width: '25rem', padding: ' 30px 30px 0 30px' }}>
							<Card.Img
								variant="top"
								src="https://i.imgur.com/j0AXZ9P.png"
								style={{ backgroundColor: '#FFEFDB', padding: '20px' }}
							/>
							<Card.Body>
								<Card.Title>Box Breathing Technique</Card.Title>
								<Card.Img
									variant="d"
									src="https://i.imgur.com/vvYmhOg.png"
									style={{ objectFit: 'contain', width: '300px' }}
								/>
								<Button variant="clear">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-shuffle"
										viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
										/>
										<path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
									</svg>
								</Button>
								<Button variant="clear">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										class="bi bi-skip-backward-circle"
										viewBox="0 0 16 16">
										<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
										<path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z" />
									</svg>
								</Button>

								<Button variant="clear">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="50"
										height="50"
										fill="currentColor"
										class="bi bi-play-circle"
										viewBox="0 0 16 16">
										<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
										<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
									</svg>
								</Button>
								<Button variant="clear">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										class="bi bi-skip-forward-circle"
										viewBox="0 0 16 16">
										<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
										<path d="M4.271 5.055a.5.5 0 0 1 .52.038L7.5 7.028V5.5a.5.5 0 0 1 .79-.407L11 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935a.5.5 0 0 1-.79-.407V8.972l-2.71 1.935A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445z" />
									</svg>
								</Button>
								<Button variant="clear">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-heart"
										viewBox="0 0 16 16">
										<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
									</svg>
								</Button>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Meditate;
