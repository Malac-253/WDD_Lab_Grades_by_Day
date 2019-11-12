
var mainCode = function(classRoom){
    
    console.log(classRoom[0].quizes)
    var setDrawdata = function(classRoom){
        var sheet = {gh:500, gw:500, ah:540, aw:540}     
        var classaxis = [] 
        classRoom.forEach(function(classRoom){
            point = {}
            point.y = ((classRoom.grade/classRoom.max)*sheet.gh)
            point.x = ((classRoom.day/40)*sheet.gw)
            classaxis.push(point)
        })
        drawGraph(classaxis,sheet)   
    }
    //Will draw the data.
    var drawGraph = function(data, sheet){
        console.log(data)
            d3.select("#graphs *").remove() //remove old graph 
            //add SVG holder tag
            d3.select("#graphs")
                .append("svg")
                .attr("width",sheet.aw)
                .attr("height",sheet.ah)
                .attr("id","sheet") 
            
            //draws box
            d3.select("#sheet")
                .append("rect")
                .attr("width",sheet.aw)
                .attr("height",sheet.ah)
                .attr("style","stroke-width:10; stroke:rgb(0,0,0);opacity:0.1")
            d3.select("#sheet")
                .append("rect")
                .attr("x",2)
                .attr("y",2)
                .attr("rx",20)
                .attr("ry",20)
                .attr("width",sheet.gw)
                .attr("height",sheet.gh)
                .attr("style","fill:red;opacity:0.5")

            
            //axis x
            d3.select("#sheet")
                .append("rect")
                .attr("width",sheet.aw)
                .attr("height",10)
                .attr("x",2)
                .attr("y",sheet.aw-35)
        
            //axisX = d3.range(0,
            
        
            //axis y
            d3.select("#sheet")
                .append("rect")
                .attr("width",10)
                .attr("height",sheet.ah)
                .attr("x",sheet.ah-35)
                .attr("y",2)
        
            //adds points
            data.forEach(function(data){
                d3.select("#sheet")
                    .append("circle")
                    .attr("cy",data.y)
                    .attr("cx",data.x)
                    .attr("r","3")
                    .attr("fill","black")               
        })      
        console.log("work")
    }
    
    setDrawdata(classRoom[0].quizes)
    
    
}

                    
var dataPromise = d3.json("classData.json")
    dataPromise.then(
        function(classRoom)
        {
                console.log(classRoom)
                mainCode(classRoom)
        },
        function(err)
        {
                console.log("fail")
        })
