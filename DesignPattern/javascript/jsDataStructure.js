let sort = {};

sort.bubleSort = (initialArray)=>{
          let sortedArray;
         if(initialArray instanceof Array)
         {   
         	 let isSwap = true;
             sortedArray = initialArray.slice();
             while(isSwap)
             {
                 
             isSwap = false;   
             for(let i=0;i<sortedArray.length-1;++i)
             {
                if(sortedArray[i]>sortedArray[i+1]) 
                {
                   // New de-structuring feature in ES6
                   [sortedArray[i],sortedArray[i+1]]=[sortedArray[i+1],sortedArray[i]];

                   /*let temp;
                   temp = sortedArray[i+1];
                   sortedArray[i+1] = sortedArray[i];
                   sortedArray[i] = temp;*/

                   isSwap = true;
                }      
             }
            }
         }
         else
         {
             throw new Error('Input should be an Array');
         }	

         return sortedArray;

}





(function testSuit()
{
     //console.log('Please ')
     let sortedArray = sort.bubleSort([8,6,9,9,10,2,3,1]);

     console.log(sortedArray);
})()