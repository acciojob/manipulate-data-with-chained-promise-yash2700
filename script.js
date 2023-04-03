//your JS code here. If required.
let array=[1,2,3,4]
new Promise((resolve)=>{
	setTimeout(()=>{resolve(array.filter((i)=>{return i%2!=0}))},1000);
}).then((value)=>{
	document.getElementById("output").innerHTML=value;
}).then((value)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			array=array.filter((i)=>{return i%2==0});
			resolve(array.map((i)=>{return i*2}));
		},2000);
	})
}).then((value)=>[
	document.getElementById("output").innerHTML=value
])
