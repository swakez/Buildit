(function($) {
    'use strict'; 

    var project_list = [
        {
          "id":1,
          "name":"Nmmmmmyati Elysia - 1 to 7 Floor",
          "location":"Kharadi",
          "status":"Active",
          "posted_date" : "20-02-2022",
          "detail":"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          "id":2,
          "name":"Nyati Elysia - 8 to 14 Floor	",
          "location":"Kharadi",
          "status":"Active",
          "posted_date" : "20-02-2022",
          "detail":"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          "id":3,
          "name":"Pride World - Railing work	",
          "location":"Dhanori",
          "status":"Listed",
          "posted_date" : "21-02-2022",
          "detail":"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          "id":4,
          "name":"Pride World City - Duct Installation	",
          "location":"Kharadi",
          "status":"Active",
          "posted_date" : "22-02-2022",
          "detail":"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus"
        }
        ,
        {
          "id":5,
          "name":"Pride World City - Window Fitting	",
          "location":"Dhanori",
          "status":"Listed",
          "posted_date" : "22-02-2022",
          "detail":""
        },
        {
          "id":5,
          "name":"Pride World City - Window Fitting	",
          "location":"Dhanori",
          "status":"Listed",
          "posted_date" : "23-02-2022",
          "detail":""
        },
        {
          "id":5,
          "name":"Pride World City - Window Fitting	",
          "location":"Dhanori",
          "status":"Listed",
          "posted_date" : "26-02-2022",
          "detail":""
        }
      ]
      var stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    };

    //   var project_list_html = ""
      for (var i = 0; i < project_list.length; i++){

        // var card_div=stringToHTML("<div class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell mdc-layout-grid__cell--span-3-tablet\"></div>")
        // var card_div_inner =stringToHTML( "<div class=\"mdc-card p-0\"></div>")
        // var image = "<img class=\"card-img-top\" src=\"../../../assets/images/samples/300x300/1.jpg\" alt=\"Card image cap\">"
        // var card_body_div = "<div class=\"mdc-card-body p-3\"></div>"
        // var card_body_div_title = "<h4 class=\"mdc-card-title\">"+project_list[i].name+"</h4>"
        // var card_body_div_date = "<h1 class=\"mdc-card-title\">"+project_list[i].posted_date+"</h1>"
        // var card_body_div_detail = "<p class=\"mdc-card-text\">"+project_list[i].detail+"</p>"

        // card_body_div.innerHTML = card_body_div_title
        // card_body_div.insertAdjacentHTML( 'beforeend', card_body_div_date );
        // card_body_div.insertAdjacentHTML( 'beforeend',  card_body_div_detail);

        // card_div_inner.innerHTML = image
        // card_div_inner.insertAdjacentHTML( 'beforeend', card_body_div );
        // card_div.innerHTML(card_div_inner)

        var myHtmlContent = `
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell mdc-layout-grid__cell--span-3-tablet">
                        <div class="mdc-card p-0">
                        <!--<img class="card-img-top" src="../../../assets/images/samples/300x300/1.jpg" alt="Card image cap"> -->
                          <div class="mdc-card-body p-3">

                          <a href="#" class="card_link">
                            <h5 class="mdc-card-title">${project_list[i].name}</h5>
                            <h6 class="mdc-card-text">${project_list[i].posted_date}</h6>
                            <div class="outer-border">
                            <div class="inner-border">
                            <p class="mdc-card-text card-text-scrollable">${project_list[i].detail}</p>
                            </div>
                            </div>
                        </a>
                            
                          </div>
                        </div>
                      </div>
                      `

        // <div class="outer_div__horizontal_align_center">
                            //     <a href="#" class="mdc-button mdc-button--raised mdc-button--dense">View Details</a>
                            // </div>

        var project_list_div = document.getElementById('listedProject');
        project_list_div.insertAdjacentHTML( 'beforeend', myHtmlContent );
        
      }
    

})(jQuery);;