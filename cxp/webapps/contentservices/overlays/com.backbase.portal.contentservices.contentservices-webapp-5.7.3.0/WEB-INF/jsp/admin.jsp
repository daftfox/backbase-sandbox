<%@ page language="java" contentType="text/html" isELIgnored="false" %>
<%@ page session="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <body>
    <h1>Content Services Admin Page</h1>
    <br/>

    <div>
        <form:form modelAttribute="importer" action="admin" method="post">
            <fildset>
                <p>
                    <form:label for="repourl" path="repourl">Repository-url</form:label>
                    <form:input path="repourl"/>
                </p>
                <p>
                    <form:label for="username" path="username">Password</form:label>
                    <form:input path="username"/>
                </p>

                <p>
                    <form:label for="password" path="password">Password</form:label>
                    <form:input path="password"/>
                </p>
                <p>
                    <form:label for="locations" path="locations">Locations</form:label>
                    <form:textarea path="locations"/>
                </p>
                <input type="submit"/>
            </fildset>
        </form:form>
    </div>
    </body>
</head>
</html>