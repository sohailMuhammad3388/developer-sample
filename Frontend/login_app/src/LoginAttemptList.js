import React from "react";
import "./LoginAttemptList.css";

const users = [
	{ username: 'user1', password: '12344' },
	{ username: 'user2', password: '12344' },
];
export const getByusername = (username) => users.find((user) => user.username === username);

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => (
	<div className="Attempt-List-Main">
		<p>Recent activity</p>
		<input type="input" placeholder="Filter..." />
		<ul className="Attempt-List">
			<LoginAttempt>TODO</LoginAttempt>
		</ul>
	</div>
);

export LoginAttemptList, { users }, { getByusername };
