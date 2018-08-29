<%--
This JSP is used to display the Cache Statistics for the configured PS and Hibernate Second level caches.
There is an option to clear a cache by clicking the link next to the cache.
@author: Ajit Skanda Kumaraswamy
@since: v5.2.3
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%String portalContextRoot = request.getContextPath();%>
<html>
<head>
    <title>Portalserver and Content Statistics summary</title>
    <%-- resolve url to local jQuery resources --%>
    <script type="text/javascript" src="<%= portalContextRoot %>/static/ext-lib/jquery.min.js"></script>
    <script type="text/javascript" src="<%= portalContextRoot %>/static/ext-lib/jquery-migrate.js"></script>
    <script type="text/javascript">
        function clearPSCache(cacheName) {
            var sServiceUri = "<%= portalContextRoot %>/caches/" + cacheName;
            makeRequest(sServiceUri, "DELETE");
        }

        function clearAllPSCaches() {
            makeRequest("<%= portalContextRoot %>/caches/portal/", "DELETE");
        }

        function clearAllPortalAndContentCaches() {
            makeRequest("<%= portalContextRoot %>/caches/all/", "DELETE");
        }

        function clearAllPSHibernateCaches() {
            makeRequest("<%= portalContextRoot %>/caches/hibernate/", "DELETE");
        }

        function clearAllCSHibernateCaches() {
            makeRequest("<%= portalContextRoot %>/caches/content/", "DELETE");
        }

        function makeRequest(url, method) {
            var headerName = 'X-BBXSRF';
            var cookieName = 'BBXSRF';
            var token = readCookie(cookieName);
            var ajaxConfig = {
                url: url,
                type: method,
                success: function() {
                    document.location.reload();
                }
            };
            if (typeof cookieName === 'string' && typeof token === 'string') {
                if (cookieName.length > 0 && token.length > 0) {
                    ajaxConfig.headers = {};
                    ajaxConfig.headers[headerName] = token;
                }
            }
            $.ajax(ajaxConfig);
        }

        function readCookie(name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for (var i=0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1,c.length);
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }
    </script>
</head>
<body id="mainBody">
<h3>Portal server Cache Statistics</h3>
<p>
    <a href="#" onclick="clearAllPSCaches()">Clear all Portal caches</a>
</p>
<p>
    <a href="#" onclick="clearAllPortalAndContentCaches()">Clear all Portal and Content caches</a>
</p>
<form action="#" method="DELETE" id="cacheDeleteFrom" name="cacheDeleteForm">
    <table border="1">
        <tr>
            <td>Associated Cache Name</td>
            <td>No. of Cache Hits</td>
            <td>No. of Cache Misses</td>
            <td>No. of Cache Gets</td>
            <td>No. of Cache Puts</td>
            <td>No. of Cache Removals</td>
            <td>No. of Cache Evictions</td>
            <td>Average Get Time</td>
            <td>Average Put Time</td>
            <td>Average Remove Time</td>
        </tr>
        <c:forEach items="${model['cacheStatistics']}" var="item">
            <tr>
                <td>${(item.name != null)? item.name:""}</td>
                <td>${(item.hitCount != null)? item.hitCount:""}</td>
                <td>${(item.missCount != null)? item.missCount:""}</td>
                <td>${(item.getCount != null)? item.getCount:""}</td>
                <td>${(item.putCount != null)? item.putCount:""}</td>
                <td>${(item.removalCount != null)? item.removalCount:""}</td>
                <td>${(item.evictionCount != null)? item.evictionCount:""}</td>
                <td>${(item.getTime != null)? item.getTime:""}</td>
                <td>${(item.putTime != null)? item.putTime:""}</td>
                <td>${(item.removeTime != null)? item.removeTime:""}</td>
                <td>
                    <c:choose>
                        <c:when test="${(item.name != null)}">
                            <a href="#" onclick="clearPSCache('${item.name}')">
                                Clear ${item.name} cache
                            </a>
                        </c:when>
                    </c:choose>
                </td>
            </tr>
        </c:forEach>
    </table>
</form>
<h3>Portal server Hibernate Secondary cache Statistics</h3>
<a href="#" onclick="clearAllPSHibernateCaches()">
    Clear all Hibernate caches
</a>
<table border="1">
    <tr>
        <td>Associated Cache Name</td>
        <td>No. of Cache Hits</td>
        <td>No. of Cache Misses</td>
        <td>Object Count</td>
        <td>Eviction Count</td>
        <td>Average Get time</td>
        <td>In Memory Cache Hits</td>
        <td>On-disk Cache Hits</td>
    </tr>
    <c:forEach items="${model['foundationCacheStatistics']}" var="cacheItem">

        <tr>
            <td>${(cacheItem.cacheName != null)? cacheItem.cacheName:""}</td>
            <td>${(cacheItem.cacheHitCount != null)? cacheItem.cacheHitCount:""}</td>
            <td>${(cacheItem.cacheMissCount != null)? cacheItem.cacheMissCount:""}</td>
            <td>${(cacheItem.cachedObjectCount != null)? cacheItem.cachedObjectCount:""}</td>
            <td>${(cacheItem.cacheEvictionCount != null)? cacheItem.cacheEvictionCount:""}</td>
            <td>${(cacheItem.averageFetchTime != null)? cacheItem.averageFetchTime:""}</td>
            <td>${(cacheItem.inMemoryHitCount != null)? cacheItem.inMemoryHitCount:""}</td>
            <td>${(cacheItem.onDiskHitCount != null)? cacheItem.onDiskHitCount:""}</td>
        </tr>
    </c:forEach>
</table>
<h3>Portal server Last cache flush time.</h3>
<table border="1">
    <tr>
        <td>Date</td>
    </tr>
    <tr>
        <td>${model['lastPublicationDateAsString']}</td>
    </tr>
</table>
<h3>Portal server JVM Memory Stats.</h3>
<table border="1">
    <c:forEach items="${model['memoryStats']}" var="mapItem">
        <tr>
            <td>${mapItem.key}</td>
            <td>${mapItem.value}</td>
        </tr>
    </c:forEach>
</table>
<h3>Content services Cache Statistics</h3>
<a href="#" onclick="clearAllCSHibernateCaches()">
    Clear all Content caches
</a>
<table border="1">
    <c:if test="${not empty model['contentCacheStatistics']}">
        <tr>
            <td>Associated Cache Name</td>
            <td>No. of Cache Hits</td>
            <td>No. of Cache Misses</td>
            <td>Object Count</td>
            <td>Eviction Count</td>
            <td>Average Get time</td>
            <td>In Memory Cache Hits</td>
            <td>On-disk Cache Hits</td>
        </tr>
        <c:forEach items="${model['contentCacheStatistics']}" var="cacheItem">

            <tr>
                <td>${(cacheItem.cacheName != null)? cacheItem.cacheName:""}</td>
                <td>${(cacheItem.cacheHitCount != null)? cacheItem.cacheHitCount:""}</td>
                <td>${(cacheItem.cacheMissCount != null)? cacheItem.cacheMissCount:""}</td>
                <td>${(cacheItem.cachedObjectCount != null)? cacheItem.cachedObjectCount:""}</td>
                <td>${(cacheItem.cacheEvictionCount != null)? cacheItem.cacheEvictionCount:""}</td>
                <td>${(cacheItem.averageFetchTime != null)? cacheItem.averageFetchTime:""}</td>
                <td>${(cacheItem.inMemoryHitCount != null)? cacheItem.inMemoryHitCount:""}</td>
                <td>${(cacheItem.onDiskHitCount != null)? cacheItem.onDiskHitCount:""}</td>
            </tr>
        </c:forEach>
    </c:if>
</table>
<h3>Content services Last cache flush time.</h3>
<table border="1">
    <c:if test="${not empty model['contentLastPublicationDateAsString']}">
        <tr>
            <td>Date</td>
        </tr>
        <tr>
            <td>${model['contentLastPublicationDateAsString']}</td>
        </tr>
    </c:if>
</table>
<h3>Content services JVM Memory Stats.</h3>
<table border="1">
    <c:if test="${not empty model['contentMemoryStats']}">
        <c:forEach items="${model['contentMemoryStats']}" var="mapItem">
            <tr>
                <td>${mapItem.key}</td>
                <td>${mapItem.value}</td>
            </tr>
        </c:forEach>
    </c:if>
</table>
</body>
</html>
