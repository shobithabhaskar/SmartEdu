<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
<html>
<head>

            <style> 
                    div
                    {
                        text-align:center;
                        width:100%;
                        
                    }
                    td,th
                    {
                        font-size:larger;
                        padding:20px;
                        text-align:center !important;
                    }
            
            </style>



</head>
<body>
<h1 style="text-align:center ;">SmartEdu</h1>
<div class="Smartedu" style="float:center;" >
<h2 >Teachers's Details</h2>
    <table border="2" align="center"  bgcolor="grey">
        <tr bgcolor="Tomato">
            <th style="text-align:left">SNO</th>
            <th style="text-align:left">TeacherID</th>
            <th style="text-align:left">Name</th>
            <th style="text-align:left">Gender</th>
            <th style="text-align:left">DOB</th>
            <th style="text-align:left">Email_ID</th>
            <th style="text-align:left">Mobile</th>
            <th style="text-align:left">Subject</th>
        </tr>
    <xsl:for-each select="Smartedu/Members">
    <tr>
        <td>
        <xsl:value-of select="SNO"/>
        </td>
        <td>
        <xsl:value-of select="TeacherID"/>
        </td>
        <td>
        <xsl:value-of select="Name"/>
        </td>
        <td>
        <xsl:value-of select="Gender"/>
        </td>
        <td>
        <xsl:value-of select="DOB"/>
        </td>
        <td>
        <xsl:value-of select="Email_ID"/>
        </td>
        <td>
        <xsl:value-of select="Mobile"/>
        </td>
        <td>
        <xsl:value-of select="Subject"/>
        </td>

    </tr>
    </xsl:for-each>
    </table>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>