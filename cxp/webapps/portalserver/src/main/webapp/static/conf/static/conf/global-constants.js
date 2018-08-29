/**
 * Copyright � 2011 Backbase B.V.
 * global-constants.js contains definitions of common constants used throughout the webapp
 * dashboard aka CXP Manager
 */

bd.globals = {	
	session: {
		enabled: true,
		timeoutMinutes: 20,
		offsetMinutes: 0,
		countDownSeconds: 120,
		pingRefreshSeconds: 25,
		cookieName: "sessionLastRequest",
		loginUrl: "/login/login.jsp",
		logoutUrl: "/j_spring_security_logout",
		pingUrl: "/login/ping.jsp"
	}
};