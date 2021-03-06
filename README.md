To use the localization method, first create a folder called /locale/ in the root of your project, and inside that folder
name each sub-folder after a locale. Create one .properties file in each folder and include in the router like this:


To install in a project, run this command:

    npm install localized-router --save
    
Then put the code in your express router like this:


    var localized = require('@haven/localized-router');

    router.get('/home/:locale', function(req, res, next) {

      var locdata = localized.getLocalization(req.params.locale);
      res.render('index', { locale: locdata });
    });
    
    
Include it in the ejs view like this:

    <%= locale._properties["project-name.page.title"] %>
    
Express is not required.

Thanks for using!


-Daniel @ Haven



                                                                                                                             
                                                                                                                             
      ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````     
     ``                                                                                                                ``    
     `                                                                                                                  `    
     `                                                                                                                  `    
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                       `````                                                      ``   
    ``                                          .       ```````..``                                                     ``   
    ``                                        .`:` `````.....```,,``                                                    ``   
    ``                                      .,::'';::,:;;;:,...,++;;:`                                                  ``   
    ``                                     `,;;;'';;'+++++++++++++''::`                                                 ``   
    ``                                  ```.:;''''''+++++++#####+++'':,.` ``                                            ``   
    ``                                 `..`,;++'''''+++++++######++''':,.``.                                            ``   
    ``                                 ,`,.,'+++'++++++##+########+++'';;,,;`                                           ``   
    ``                                 :.,:;'+++++++++##++###########+++++';.                                           ``   
    ``                                `;;:;'++++++++++##++#############+++';.`                                          ``   
    ``                                .';;'++++''++'++##++#########+##+++++',. ```                                      ``   
    ``                                .;;;'++++'''''++++++#####+++++++++++++;.`.::`                                     ``   
    ``                               ``.,;'+++++++'++++'+++#+++''''+++''++++';;:::.                                     ``   
    ``                               .``.'+##++++'++;''+++++++';''+++++++++'+++';:,                                     ``   
    ``                               ,..,'#####++++++++++++++';;+++++++++++'+++';;;,                                    ``   
    ``                              `:::;'+#####+++++++++++';;,'++++++##++;+#+++;;;:`                                   ``   
    ``                              `;'++++#####+++++++++++;:,,;'+++++##+''+#++++';,`                                   ``   
    ``                              `.;++++#########+++++';,...,'+++++##+++''+++++':.                                   ``   
    ``                              .:'++++#########+++'';,..``.'++'''###++''+##+++'.                                   ``   
    ``                             `:;'++'+#########++';;:``.``.;';;;;+###########';.                                   ``   
    ``                             .:;;;'++########++';;:.  `  .,;:,::;++####+###+':.`                                  ``   
    ``                             `.:'++########++';;;:.`  `  `,;,,,,:'++##++##++':.                                   ``   
    ``                             `.;+#########++';;;:,````````:;:;;;;'++++++#++'';,                                   ``   
    ``                             .:'+#########++';;''';:,.```.::;;'''';'++####++'':                                   ``   
    ``                             ,;'+#########++';;''+'';,....,:;''';::;'+#####++';``                                 ``   
    ``                             `;'+###@#####+';:,,,:'';;,```.;;:,..,::;'+#####+'';.                                 ``   
    ``                             .;'++##@####+';::,,,,:;;;,`  .,:;+#';:,,:'#####++++,`                                ``   
    ``                            `:;'+####@@#+';:::;'++,,,..````.,.,,,::...:+####++++:.                                ``   
    ``                            .;'+#####@@#':,,,:;:,..``..````.........`.,'####++++:,`                               ``   
    ``                           `:'+#########;,..`......``...```.`````````.,;#####++;:,`                               ``   
    ``                           `:'+######+#+:,..`````````...```.```````...,;#####+'';.                                ``   
    ``                            :'+########+:,....``````....```````````....;#####++';`                                ``   
    ``                            ,;+########+:,.....`````...`` ```.`````...,;#####++':`                                ``   
    ``                            `;'########+;:.....````.....` ``....``....,;#####++'.                                 ``   
    ``                            `;'########+;:,,,..````.,,,,,..,::,.......,;#####+':                                  ``   
    ``                             :;+#####+++':,,,...`.`.'+++'''''',``....,,;+####';,                                  ``   
    ``                             `'+######+++;:,,....```:;;'+++';:.```...,,;'###+':`                                  ``   
    ``                              ,'+#####';+;::,,..````,,,,;';,,,...``.,,,;'##+':.                                   ``   
    ``                               ,+#####;:+;::,,...``.,,,,...,,,....`.,,,'##+;,`                                    ``   
    ``                               `'+##@@+;+';:,,......,,:;;,:::::,.....,:'#+,`                                      ``   
    ``                                .'##@@###+;:,,..,,,:::::;;;;;;;':,...,:'++                                        ``   
    ``                                `:+#@@@@@+;:,...,:+++';::;,...'+;,...,:++:                                        ``   
    ``                                `.:+#@@@@#;:,....:,;',,`````.,;,.....,;+;`                                        ``   
    ``                                `.,:;###@#';:,.....,::::. `.:::......:'+:                                         ``   
    ``                                `,,;####@@+;:,.....,,:::,,.,,,,.....,:'+,                                         ``   
    ``                                .,:#####@@#';:,.....,:::...,,,.....,:;++;                                         ``   
    ``                                .,;+####@@##';:.....,,,,,,,,,,.....,;'+'.`       ```                              ``   
    ``                               `,:'+#####@@#+';:,,...,,,,,,,,.....,:'++,.`       .```                             ``   
    ``                               .,;'+#@###@@##+';:,...,,,,,,,,.....,;+++',.       ,...`                            ``   
    ``                               .:''+#@@##@@###+';,,...............:+##++;,`      `:...                            ``   
    ``                              `.:'''######@####+':,...............;+##',,,.`      :....                           ``   
    ``                              `,;'''+#+++########':,...........,,,'+##..`.,.`     .,...`                          ``   
    ``                              .:'''''++''+#+#####+':,,,......,,,:;'+##,.```.``    `:,.``                          ``   
    ``                             `;'''''''''''+''+####+::,,,,,,,,,::;''+##',.```.```````,.``                          ``   
    ``                             .'''''''''''''::;+####';:::::::::;;'''##+'',.````.`````..```                         ``   
    ``                             ;''''''''''''';,:;+####+';;;;;;;;'''''#+'''',.````````...``.                         ``   
    ``                             ''''''''''''''',,,;+####+++++++''''''+#+''''':.`  ````..,.``.                        ``   
    ``                            :''''''''''''''';,,,'###########++''''#+''''''':.`  ``...,.``.`                       ``   
    ``                           `''''''''''''''''';,,,+##########++'''+#+'''''''':.` ```..:..``.                       ``   
    ``                          `''''''''''''''''''';,,;+#########++''+#''''''''''';,`````.,,.````                      ``   
    ``                          ''''''''''''''''''''';,,+#########++++##+''''''''''';,`````...```.                      ``   
    ``                         ;'''''''''''''''''''''';:;+########+++###''''''''''''';,..````..``.`                     ``   
    ``                         +'''''''''''''''''''''''';+########++###+''''';'''''''';,.`````.```.                     ``   
    ``                        .''''''''''''''''''''''''''++############'''''''''''''''';..``````````                    ``   
    ``                       `'''''''''''''''''''''''''''''+##########+''''''''''''''''':,.````````.                    ``   
    ``                       ;'''''''+++'''''''''''''''''''''+++######'''''''''''::;'''';:,.```````.`                   ``   
    ``                   .';;''''''''''+++++''''''''''''''''+'''++++++''''''''';:..``,:;;::,.``````..                   ``   
    ``                   ''''''''''''''''++++++++'''''''''''''''''''''''''''''';,.``````,:,,,.`````..                   ``   
    ``                  ''''''''''''''''''''''++##++++++''''''''''''''''''''''';:,.`````````..`````...                  ``   
    ``              ```'''''''''''''''''''''''''''+########++''++++''''''''''''';;,.``````` ```````..,                  ``   
    ``            `'''''''''''''''''''''''''''''''''+++######'++++++'''''''+'''''':,.``````` `````..,,`                 ``   
    ``            '''''''''''''''''''''''''''''''''''''''+++++'++'''''''''++++''''':,..`````` ````.,,,``                ``   
    ``            +'''''''''''''''''''''''''''''''''''''''''++'''''''''''''++++'''';;;,..`````````.,,,,`                ``   
    ``            '''''''''''''''''''''''''''''''''''''''''''+'''''''''''''++++++''''+';,..```````...,,`                ``   
    ``            '''''''''''''''''''''''''''''''''''''''''''+''''''''''''''++#+++,...,'':..`````....,,,                ``   
    ``            '''''''''''''''''''''';;'''''''''''''''''''''''''''''''''''+###'....``.::..```.....,,,:`              ``   
    ``            '''''''''''''''''''''';;''''''''''''''''''''+''''''''''''''+###'....````....`....,,,,,;`              ``   
    ``            ''''''''''''''''''''';;;''''''''''''''''''''+''''''''''''''+++#+,...````````....,,,,,,::              ``   
    ``            '''''''''''''''''''''';;''''''''''''''''''''+''''''''''''''+':,:':,..```````...,,,,,,,:;`             ``   
    ``            '''''''''''''''''''''';;''''''''''''''''''''+''''''''''''''`  `.:':,.....``...,,,,,,,,,;`             ``   
    ``            '''''''''''''';;''''''';'''''''''''''''''''''''''''''''''', ```,;'';,...........,,,,,,,:,`            ``   
    ``            '''''''''''''''''''''''''''''''''''''''''''''''''''''''''',``.#:''+'':,..,,,,....,,,,,,,;`            ``   
    ``            '''''''''''''''''''''''''''''''''''''''''''''+'''':.``  :'; .:'''+++++;:,,,,,.....,,,,,,,,`           ``   
    ``            '''''''''''''''''''''''''''''''''''''''''''':,' .;     `.',`.:;''++++#';:,,,,,....,,,,,,..            ``   
    ``                                                                                                                  ``   
    ``            ;'''''` ,'''`   ''';  ''''    ;'''       `''''''':     ;'''   `''',  ''''''';`    `''''''':           ``   
    ``          .'''''''` ,'''`   ''';  ''''    ;'''       `''''''''';   ;'''   `''',  ''''''''''   `''''''':           ``   
    ``          ''''';''` ,'''`   ''';  ''''    ;'''       `'''''''''';  ;'''   `''',  '''''''''''  `''''''':           ``   
    ``          ''''    ` ,'''`   ''';  ''''    ;'''       `''',  ;''''  ;'''   `''',  ''';  :''''` `'''.               ``   
    ``          ''''.     ,'''`   ''';  ''''    ;'''       `''',   ''''. ;'''   `''',  ''';   ;'''; `'''.               ``   
    ``          '''''',   ,'''`   ''';  ''''''''''''       `''',   ,''': ;'''   `''',  ''';    '''' `'''''''`           ``   
    ``          `'''''''  ,'''`   ''';  ''''''''''''       `''',   .'''; ;'''   `''',  ''';    '''' `'''''''`           ``   
    ``            ;'''''; ,'''`   ''';  ''''''''''''       `''',   :''': ;'''   `''',  ''';   `'''; `'''''''`           ``   
    ``              :'''' .''',  `''':  ''''    ;'''       `''',   ''''` :'''`  ,'''.  ''';   ;''', `'''.               ``   
    ``          ;    ''''  ''''` ''''`  ''''    ;'''       `''', `'''''  .'''' `''''   ''';  ;''''  `'''.               ``   
    ``          '''''''';  ''''''''''   ''''    ;'''       `''''''''''`   ''''''''''   '''''''''',  `''''''''           ``   
    ``          ''''''''    ''''''''`   ''''    ;'''       `'''''''''`    `''''''''    ''''''''',   `''''''''           ``   
    ``          :''''':      :'''';     ''''    ;'''       `'''''';.        ;'''':     '''''';,     `''''''''           ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
    ``                                                                                                                  ``   
     `                                                                                                                  `    
     `                                                                                                                  `    
      ```                                                                                                            ```     
       ````````````````````````````````````````````````````````````````````````````````````````````````````````````````    
