function listmaker(n) {
    var storage = window.localStorage;
    $(document).ready(
        function() {
            $.ajax ( {
                type:"GET",
                // TODO : 'URL est à adapter selon que l'on accède aux fichiers en partage ou perso.
                // var urlConc = storage.getItem("serverURL") + "lien absolu vers le XML désiré";
                url:"http://10.31.0.104/truc.php",
                // username : storage.getItem("username");
                // password : storage.getItem("password");
                dataType:"xml",
                success: function (xml) {
                    $(xml).find("Document").each( 
                        // TODO : le format des XML a changé, faut adapter (1 fonction par page)
                        function(i) {
                        var nom = $(this).find("name").text();
                        var taille = $(this).find("size").text();
                        var type = $(this).find("type").text();
                        var id_aux = i+'';
                        var id_col = "col" + n + "_" + id_aux;
                        $("<div id=" + id_col + " data-role='collapsible'></div>").appendTo("#collapsible"+n);
                        $("<h3></h3").html(nom).appendTo("#"+id_col);
                        $("<p></p>").html("Taille : " + taille + " octets").appendTo("#"+id_col);
                        $("<p></p>").html("Type : " + type).appendTo("#"+id_col);
                        $("#"+n).find("#"+id_col).collapsible();
                    });
                }
            });
        }
    );
}

function listMaker(n) {
    var storage = window.localStorage;
    $(document).ready(
        function() {
            var lang = "";
            if (window.localStorage.getItem("currentLanguage") == "") {
                lang = window.localStorage.getItem("defaultLanguage");
            }
            else {
                lang = window.localStorage.getItem("currentLanguage");
            }
            $.ajax ( {
                type:"GET",
                // TODO : 'URL est à adapter selon que l'on accède aux fichiers en partage ou perso.
                // var urlConc = storage.getItem("serverURL") + "lien absolu vers le XML désiré";
                url:"http://10.31.0.104/truc.php",
                dataType:"xml",
                success: function (xml) {
                    $(xml).find("Document").each( 
                        function(i) {
                        var owner = $(this).find("owner > firstName").text() + " " + $(this).find("owner > lastName").text();
                        // var ciphered = $(this).find("ciphered").text();
                        var nom = $(this).find("name").text();
                        var taille = $(this).find("size").text();
                        var type = $(this).find("type").text();
                        var text_owner = storage.getItem("text_owner_"+lang);
                        // var text_ciphered = storage.getItem("text_ciphered_"+lang);
                        var text_size = storage.getItem("text_size_"+lang);
                        var text_type = storage.getItem("text_type_"+lang);
                        var id_aux = i+'';
                        var id_col = "col" + n + "_" + id_aux;
                        var id_table = "table" + n + "_" + id_aux;
                        $("<div id=" + id_col + " " +
                        		"data-role='collapsible' " +
                        		"class='ui-icon-nodisc' " +
                        		"data-collapsed-icon='plusLS'" +
                        		"data-expanded-icon='moinsLS'" +
                        		"data-iconshadow='false'></div>").appendTo("#collapsible"+n);
                        $("<h3></h3").html(nom).appendTo("#"+id_col);
                        $("<table><tbody id=" + id_table + "></tbody></table>").appendTo("#"+id_col);
                        $("<tr>").appendTo("#"+id_table);
                        $("<td></td>").html("<span class='boldLS'>" + text_owner + " :</span><br/> " + owner).appendTo("#"+id_table);
                        $("<td rowspan='8'></td>").html("<img " +
                                "src='img/download.png' " +
                                "class='downloadImg'" +
                                "title='Download'></img>").appendTo("#"+id_table);
                        $("</tr><tr>").appendTo("#"+id_table);
                        // $("<td></td>").html("<span class='boldLS'>" + text_ciphered + "</span> : " + ciphered).appendTo("#"+id_table);
                        // $("</tr><tr>").appendTo("#"+id_table);
                        $("<td></td>").html("<span class='boldLS'>" + text_size + " :</span><br/>  " + taille + " octets").appendTo("#"+id_table);
                        $("</tr><tr>").appendTo("#"+id_table);
                        $("<td></td>").html("<span class='boldLS'>" + text_type + " :</span><br/> " + type).appendTo("#"+id_table);
                        $("</tr><tr>").appendTo("#"+id_table);
                        $("<td></td>").html("<img src='img/loupe.png' title='Aperçu' class='loupeImg'></img>Aperçu").appendTo("#"+id_table);
                        $("</tr>").appendTo("#"+id_table);
                        $("</table>").appendTo("#"+id_col);
                        $("#"+n).find("#"+id_col).collapsible();
                    });
                }
            });
        }
    );
}

function languageInit() {
    $(document).ready(
        function() {
	var storage = window.localStorage;
	var lang = storage.getItem("currentLanguage");
	if( lang == "") {
		lang = storage.getItem("defaultLanguage");
	}
    $("h1[text=titleShared]").html(storage.getItem("text_titleShared_"+lang));
    $("h1[text=titlePerso]").html(storage.getItem("text_titlePerso_"+lang));
	$("h1[text=menu]").html(storage.getItem("text_menu_"+lang));
	$("span[text=shared]").html(storage.getItem("text_shared_"+lang));
	$("span[text=perso]").html(storage.getItem("text_perso_"+lang));
	$("span[text=menu]").html(storage.getItem("text_menu_"+lang));
	$("li[text=serverURL]").html(storage.getItem("text_serverURL_"+lang));
	$("a[text=serverURL]").html(storage.getItem("text_serverURL_"+lang));
	$("li[text=username]").html(storage.getItem("text_username_"+lang));
	$("a[text=login]").html(storage.getItem("text_login_"+lang));
	$("li[text=password]").html(storage.getItem("text_pass_"+lang));
	$("li[text=connection]").html(storage.getItem("text_connection_"+lang));
	$("li[text=settings]").html(storage.getItem("text_settings_"+lang));
	$("a[text=language]").html(storage.getItem("text_language_"+lang));
	$("li[text=language]").html(storage.getItem("text_language_"+lang));
        }
    );
}

function setStorage () {
    $(document).ready(
        function() {
        	var storage = window.localStorage;
        	// Langues
        	storage.setItem("defaultLanguage","eng");
        	storage.setItem("currentLanguage","");
        	// Identifiants
        	storage.setItem("username","");
        	storage.setItem("password","");
        	// Français
        	storage.setItem("text_menu_fr","Menu");
        	storage.setItem("text_shared_fr","Accueil");
        	storage.setItem("text_perso_fr","Fichiers");
        	storage.setItem("text_serverURL_fr","URL du serveur");
        	storage.setItem("text_login_fr","Identifiants");
            storage.setItem("text_username_fr","Nom d'utilisateur");
        	storage.setItem("text_pass_fr","Mot de passe");
        	storage.setItem("text_connection_fr","Connexion");
        	storage.setItem("text_settings_fr","Préférences");
        	storage.setItem("text_language_fr","Langage");
        	storage.setItem("text_owner_fr","Nom du propriétaire");
            storage.setItem("text_ciphered_fr","Crypté");
            storage.setItem("text_size_fr","Taille");
            storage.setItem("text_type_fr","Type");    
        	// Anglais
        	storage.setItem("text_menu_eng","Menu");
        	storage.setItem("text_shared_eng","Home");
        	storage.setItem("text_perso_eng","Files");
        	storage.setItem("text_serverURL_eng","Server URL");
        	storage.setItem("text_login_eng","Login");
            storage.setItem("text_username_eng","Username");
        	storage.setItem("text_pass_eng","Password");
        	storage.setItem("text_connection_eng","Connection");
        	storage.setItem("text_settings_eng","Settings");
        	storage.setItem("text_language_eng","Language");
            storage.setItem("text_owner_eng","Owner's name");
            storage.setItem("text_ciphered_eng","Ciphered");
            storage.setItem("text_size_eng","Size");
            storage.setItem("text_type_eng","Type");  
        }
    );
}

function closePopUp (id) {
    $("#"+id).popup("close");
}

function stockUserPass() {
    var storage = window.localStorage;
    storage.setItem("username",$("input[name=username]").val());
    storage.setItem("password",$("input[name=password]").val());
}

function stockURL() {
    var storage = window.localStorage;
    storage.setItem("serverURL",$("input[name=serverURL]"));
}

function stockLanguage() {
    var storage = window.localStorage;
    storage.setItem("currentLanguage",$('input[name=lang]:checked').val());
}

function initPage() {
    $(document).bind("mobileinit", function() {
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;
    });
}

function toggleColor() {
    $("#collapsible2 .ui-icon-plusLS").parent().find(".ui-btn-text").css('color','black');
    $("#collapsible2 .ui-icon-moinsLS").parent().find(".ui-btn-text").css('color','rgb(51,173,214)');
}

function changeColor() {
    $(function() {
        toggleColor();
        $("#collapsible2").bind('expand', function() { 
            toggleColor();}
    ).bind('collapse', function() {
            toggleColor();}
        );
    });
}