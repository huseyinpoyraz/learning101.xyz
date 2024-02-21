// import { axiosApp } from "../utils/axiosApp";
// const axios = require('axios/dist/browser/axios.cjs');
const API_URL="https://heremynft.herokuapp.com/learning/";
$(document).ready(()=>{
    getSkillList();
});

getSkillList=()=>{
    console.log("aaaa");
    // axiosApp.get("v1/skill/getAllSkills").then((response)=>{        
    //     console.log(response);
    // });
    axios({
        method: 'get',
        url: `${API_URL}v1/skill/getAllSkills`,
      })
        .then(function (response) {
          if(response.status == 200){
            var layer_0=``;
            var layer_1=``;
            var layer_2=``;
            var layer_3=``;
            var layer_4=``;
            var layer_5=``;
            let skillData=response?.data?.data;
            const groupByLevel = groupByData(skillData);
            console.log(groupByLevel);
            groupByLevel[0]?.forEach((item,index) => {
                if(item.level == 0){
                    if(index == 0)
                        layer_0=` <div class="element top-element"><a class="text-conf" href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                }                
            });
            groupByLevel[1]?.forEach((item,index) => {
              if(item.level == 1){
                  if(index == 0)
                      layer_1+=` <div class="element left-element"><a class="text-conf-left"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 1)
                    layer_1+=` <div class="element right-element"><a class="text-conf-right"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
              }                
            });
            groupByLevel[2]?.forEach((item,index) => {
              if(item.level == 2){
                  if(index == 0)
                      layer_2+=` <div class="element left-element"><a class="text-conf-left"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 1)
                    layer_2+=` <div class="element"><a class="text-conf" href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 2)
                    layer_2+=` <div class="element right-element"><a class="text-conf-right" href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                 
              }                
            });
            groupByLevel[3]?.forEach((item,index) => {
              if(item.level == 3){
                  if(index == 0)
                      layer_3+=` <div class="element left-element"><a class="text-conf-left"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 1)
                    layer_3+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 2)
                    layer_3+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 3)
                    layer_3+=` <div class="element right-element"><a class="text-conf-right"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
              }                
            });
            groupByLevel[4]?.forEach((item,index) => {
              if(item.level == 4){
                  if(index == 0)
                      layer_4+=` <div class="element left-element"><a class="text-conf-left"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 1)
                    layer_4+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 2)
                    layer_4+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 3)
                    layer_4+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;                
                  if(index == 4)
                    layer_4+=` <div class="element right-element"><a class="text-conf-right"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
              }                
            });
            groupByLevel[5]?.forEach((item,index) => {
              if(item.level == 5){
                  if(index == 0)
                      layer_5+=` <div class="element left-element"><a class="text-conf-left"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 1)
                    layer_5+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 2)
                    layer_5+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 3)
                    layer_5+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 4)
                    layer_5+=` <div class="element"><a class="text-conf"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
                  if(index == 5)
                    layer_5+=` <div class="element right-element"><a class="text-conf-right"  href="/t-insan.html?slug=${item.id}"><br><br>${item?.name?.text}</a></div>`;
              }                
            });
            $('.layer-1').html(layer_0);
            $('.layer-2').html(layer_1);
            $('.layer-3').html(layer_2);
            $('.layer-4').html(layer_3);
            $('.layer-5').html(layer_4);
            $('.layer-6').html(layer_5);

          }

        });
}

function groupByData(data) {
  const gruplar = {};

  data.forEach(veri => {
      const seviye = veri.level || 0;

      if (!gruplar[seviye]) {
          gruplar[seviye] = [];
      }

      gruplar[seviye].push(veri);
  });

  return gruplar;
}
