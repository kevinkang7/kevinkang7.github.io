$(document).ready(function(){

//windows scroll and fix
  window.onscroll = function() {myFunction()};
  let header = document.getElementById("h_title");
  // let sub_header= document.getElementById("h_title2");
  let len_totop = header.offsetTop;
  // let len_totop2 = sub_header.offsetTop;
     // console.log(len_totop,len_totop2);
  function myFunction() {
    if (window.pageYOffset > len_totop) {
      header.classList.add("sticky");
      header.style.top='0';
      } else {
      header.classList.remove("sticky");
     }
     // if (window.pageYOffset > len_totop2) {
     //   sub_header.classList.add("sticky");
     //   sub_header.style.top='100';
     //   } else {
     //   sub_header.classList.remove("sticky");
     //  }
    }

//click effect
const demo_info = [
    {country:"all foreign born",ethnicity:"all foreign born", url_map:"../images/boston_fb.png",url_ed:"",desc:
    "<p>Boston is home to more people from more countries than ever before. The foreign born are visible throughout the city,from Haitian churches in Mattapan, Cape Verdean salons in Upham’s Corner, Dominican restaurants in Roxbury, and Vietnamese businesses in the Fields Corner neighborhood of Dorchester. In recent years, many of Boston’s neighborhoods experienced an increase in the foreign-born population, who now account for approximately 27 percent of Boston’s total population. In 2014, Boston had the seventh highest share of foreign-born residents among the 25 largest cities in the United States. According to the 2014 American Community Survey (ACS), Boston’s foreign-born population stood at 177,461, an increase of over 17 percent from 2000.</p>"},

    {country:"barbados",ethnicity:"barbadian", url_map:"../images/maps/barbados.png",url_ed:"../images/maps/ed_barbados.png",desc:
    "<li>More than 50% of the Barbadians in Massachusetts live in Boston. </li> <li>68% of foreign-born Barbadians are naturalized U.S. citizens. </li> <li>Collectively, foreign-born Barbadians contributed close to $28 million to the regional economy in 2014.</li>"},

   {country:"brazil",ethnicity:"brazilian", url_map:"../images/maps/brazil.png",url_ed:"../images/maps/ed_brazil.png",desc:
   "<li>Boston is home to 5% of the state’s Brazilians—down from 22% in 1990.</li> <li>Brazilians in Boston have a high labor force participation rate—86%.</li> <li>38% of foreign-born Brazilians have achieved a middle class standard of living.</li>"},

   {country:"cape verde",ethnicity:"cape verdean", url_map:"../images/maps/cape verde.png",url_ed:"../images/maps/ed_cape.png",desc:
   "<li>1 in 5 Cape Verdeans in the U.S. live in Boston.</li> <li>Almost half of adult foreign-born Cape Verdeans have not completed high school.</li> <li> A greater share of Cape Verdeans are employed in private, for-profit organizations than overall foreign-born and native-born populations.</li> <li> Over half of adult Cape Verdeans lack either a high school diploma or English proficiency.</li>"},

   {country:"china",ethnicity:"chinese", url_map:"../images/maps/china.png",url_ed:"../images/maps/ed_china.png",desc:
   "<li>About 2.5 million foreign-born Chinese live in the United States.</li> <li>Nearly 20% of foreign-born Chinese in Boston are enrolled in a college or university.</li> <li>Foreign-born Chinese form two distinct groups based on education: of those over age 25, 36% have not completed high school and another 36% have a Bachelor’s degree or higher.</li> <li>Foreign-born Chinese are more likely to be employed in private non-profit firms than other populations.</li> <li> 29% of foreign-born Chinese live in poverty.</li>"},

   {country:"colombia",ethnicity:"colombian", url_map:"../images/maps/colombia.png",url_ed:"../images/maps/ed_colombia.png",desc:
   "<li>75% of Colombians in Boston live in East Boston.</li> <li>76% of Colombians work for private for-profit companies, mostly in service occupations.</li> <li> Over half of adult (age 25+) Colombians lack a high school diploma or English proficiency.</li>"},

   {country:"dominican republic",ethnicity:"dominican", url_map:"../images/maps/dom republic.png",url_ed:"../images/maps/ed_dom.png",desc:"<Li>More than 20,000 foreign-born Dominicans live in Boston.</li> <li>Forty-one percent of adult foreign-born Dominicans have not completed high school.</li> <li>Foreign-born Dominican employment in the private-for-profit sector is higher than for other foreign born.</li> <li>64% of adult foreign-born Dominicans either lack a high school diploma or have limited English proficiency.</li>"},

   {country:"el salvador",ethnicity:"salvadoran", url_map:"../images/maps/el salvador.png",url_ed:"../images/maps/ed_salvador.png",desc:"<li>80% of Salvadorans in Boston live in East Boston. </li> <li>Over 58% of adult Salvadorans have not completed high school. </li> <li>82% of adult Salvadorans are in the labor force and almost all work for private for-profit employers. </li> <li>Only 14% of Salvadorans have achieved a middle class standard of living. </li>"},

  {country:"guatemala",ethnicity:"guatemalan", url_map:"../images/maps/guatemala.png",url_ed:"../images/maps/ed_guatemala.png",desc:"<li>There are 3,663 foreign-born Guatemalans in Boston, the majority of whom live in East Boston or Dorchester.</li> <li>The majority of foreign-born Guatemalans entered the U.S. before 2000, but most are not yet U.S. citizens.</li> <li>Half of Guatemalan adults in Boston lack English proficiency.</li>"},

  {country:"haiti",ethnicity:"haitian", url_map:"../images/maps/haiti.png",url_ed:"../images/maps/ed_haiti.png",desc:"<li>Half of foreign-born Haitians in Boston are between the ages of 35 and 64. </li> <li>35% of adult Haitians completed their education with a high school diploma. </li> <li>Collectively, Haitians contributed close to $115 million to the regional economy in 2014. </li> <li>18% of foreign-born Haitians live in poverty, compared to 20% of the total population. </li>"},

  {country:"honduras",ethnicity:"honduran", url_map:"../images/maps/honduras.png",url_ed:"../images/maps/ed_honduras.png",desc:"<li>Almost 3,000 foreign-born Hondurans live in Boston. </li> <li>Only 17% of adult Hondurans in Boston have completed a Bachelor’s degree. </li> <li> Hondurans have lower poverty rates than the citywide average.</li>"},

  {country:"india",ethnicity:"indian", url_map:"../images/maps/india.png",url_ed:"../images/maps/ed_india.png",desc:"<li>Approximately 91% of adult foreign-born Indians in Boston have at least a Bachelor’s degree. </li> <li>74% of foreign-born Indians work in white collar occupations. </li> <li>Collectively, foreign-born Indians contributed close to $82 million to the regional economy in 2014.</li>"},

  {country:"ireland",ethnicity:"irish", url_map:"../images/maps/ireland.png",url_ed:"../images/maps/ed_ireland.png",desc:"<li>Almost half of the 3,213 foreign-born Irish in Boston live in Dorchester or West Roxbury. </li> <li>Irish foreign born are likely to have a high school diploma as their highest educational attainment. </li> <li>Only 3% of foreign-born Irish are poor, and 48% are at least middle class.</li>"},

  {country:"jamaica",ethnicity:"jamaican", url_map:"../images/maps/jamaica.png",url_ed:"../images/maps/ed_jamaica.png",desc:"<li>Nearly 60% of foreign-born Jamaicans in Boston are between the ages of 35 and 64. </li> <li>35% of foreign-born Jamaicans have a high school education as their highest level of education. </li> <li>A greater share of Jamaicans are employed in private, non-profit organizations than other foreign-born and native-born populations. </li> <li>Collectively, Jamaicans contributed close to $77 million to the regional economy in 2013. </li>"},

  {country:"trinidad and tobago",ethnicity:"trinidadians and tobagonians", url_map:"../images/maps/trinidad.png",url_ed:"../images/maps/ed_trinidad.png",desc:"<li>Approximately 3,500 people who were born in Trinidad and Tobago live in Boston. </li> <li>75% of Trinidadians and Tobagonians have been in the United States for more than 15 years, and the majority are U.S. citizens. </li> <li>Foreign born from Trinidad and Tobago are less likely to live in poverty than the citywide average.</li>"},

  {country:"vietnam",ethnicity:"vietnamese", url_map:"../images/maps/vietnam.png",url_ed:"../images/maps/ed_vietnam.png",desc:"<li>The largest group of Vietnamese in the United States is in California. </li> <li>39% of adult foreign-born Vietnamese in Boston have not completed high school. Self-employment is more common among Vietnamese in Boston than among other foreign-born and native-born populations. </li> <li>71% of adult foreign-born Vietnamese in Boston lack a high school diploma, English proficiency, or both. </li>"},
 ]



  $("#country-list, #description").hover(
    function(){
      $("#country-list, #description").addClass('active_back');
    },function(){
      $("#country-list, #description").removeClass('active_back');
  });

  // $("#country-list, h2").click(function(e){
  //   e.preventDefault();
  //   $("#map-container").html(`
  //     <img src="images/boston_fb.png" >
  //     <h3>Educational Attainment for the Population 25 Years and Older </h3>
  //     <img src="" >
  //     `);
  // });

//html method do with map container
  $("#country-list button").click(function(e){
    e.preventDefault();
    let country_name=$(this).text().toLowerCase();
  $('.active').removeClass('active animated bounce');
  $(this).addClass('active animated bounce');
             let $description =$('.desc');
            // Jen: you need to add ul//
             $description.empty().append('<ul></ul>');
            // $description.empty();
       for(let item of demo_info) {
         if (country_name==item.country){
           $("#map-container").html(`
             <h2>${item.ethnicity} Population in Boston </h2>
             <img src="${item.url_map}" >
             <h3>${item.ethnicity} Educational Attainment for the Population 25 Years and Older </h3>
             <img src="${item.url_ed}" >
             `);
             $description.find('ul').append(`${item.desc}`);
           }
           if (country_name=="all foreign born"){
                 $("#map-container h3").remove();
               }


         // if(country_name=="all foreign born") {
         //    $("#map-container").text("sa");
         //    $("#description").html($("#description"));
         //  }
             // $description.html(`${item.desc}`);

   // $(this).css('background-color','red')
   // $("#map-container img").replaceWith(`<img src=${demo_info[0].url_map} alt="${demo_info[0].url_country}" >`,
   // `<img src=${demo_info[0].url_ed} alt="${demo_info[0].url_country}" >`);
   // $("#description div").replaceWith(`<div>${demo_info[0].desc}</div>`);
       }
    });



});
