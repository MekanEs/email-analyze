let str = `<tr>
    <td>
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td align="center" style="color: #BAB2A8; font: 12px/18px Tahoma, Arial, Helvetica, sans-serif; padding: 16px 16px 0px;">Sie haben diese E-Mail erhalten, weil Sie den Newsletter von&nbsp;<a style="color:#F09235; text-decoration:underline;" target="blank" href="{{ redirect_url }}?r=D3-D3-wLuV2avR3LzJXZzV3LpBXY&token={{ autologin_token }}&redirect_url=/%3Futm_source%3Demail%26utm_medium%3Dsg%26utm_campaign%3Dtournament%26utm_content%3Dtrnt_28%26retention%3D1%26lang%3Dde%26uid%3Dsol:{{user_id}}%26message_id%3D{{message_id}}">SOL&nbsp;Casino</a> abonniert&nbsp;haben.
                </td>
            </tr>
            <tr>
                <td align="center" style="color: #BAB2A8; font: 12px/18px Tahoma, Arial, Helvetica, sans-serif; padding: 0px 16px 0px;">Sie können die Nutzungsregeln der&nbsp;Website&nbsp;<a style="color:#F09235; text-decoration:underline;" target="blank" href="{{ redirect_url }}?r=D3-D3-wLuV2avR3LzJXZzV3LpBXY&token={{ autologin_token }}&redirect_url=/terms%3Futm_source%3Demail%26utm_medium%3Dsg%26utm_campaign%3Dtournament%26utm_content%3Dtrnt_28%26retention%3D1%26lang%3Dde%26uid%3Dsol:{{user_id}}%26message_id%3D{{message_id}}">hier</a>&nbsp;nachlesen.
                </td>
            </tr>
            <tr>
                <td align="center" style="color: #BAB2A8; font: 12px/18px Tahoma, Arial, Helvetica, sans-serif; padding: 0px 16px 0px;">Sie können die Nutzungsregeln der&nbsp;Website&nbsp;<a style="color:#F09235; text-decoration:underline;" target="blank" href="{{ redirect_url }}?r=D3-D3-wLuV2avR3LzJXZzV3LpBXY&token={{ autologin_token }}&redirect_url=/terms%3Futm_source%3Demail%26utm_medium%3Dsg%26utm_campaign%3Dtournament%26utm_content%3Dtrnt_28%26retention%3D1%26lang%3Dde%26uid%3Dsol:{{user_id}}%26message_id%3D{{message_id}}">hier</a>&nbsp;nachlesen.
                </td>
            </tr>


            <tr>
                <td class="l02 pb-24" align="center" style="color: #BAB2A8; font: 12px/18px Tahoma, Arial, Helvetica, sans-serif; padding: 0px 16px 32px;">{{{license_de}}}<img style="display: none;" src="https://maxclientstatapi.com/pixel?title={{title}}&sid={{message_id}}&el={{#if groups.all_staff}}test{{else}}real{{/if}}&uid=sol:{{user_id}}&utm_medium=sg&utm_campaign=tournament&utm_content=trnt_28&lang=de" alt="icon" />
                </td>
            </tr>
        </table>
    </td>
</tr>`;

// Regular expression to find utm_content values
let regex = /utm_content%3D([^%&]+)/g;

// Find matches
let matches = str.match(regex);

// Extract the captured group (the utm_content value) from each match
let utmContentValues = matches.map(match => {
    let matchWithoutPrefix = match.replace("utm_content%3D", "");
    return decodeURIComponent(matchWithoutPrefix);
});

console.log(utmContentValues);