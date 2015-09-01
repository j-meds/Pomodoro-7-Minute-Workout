angular.module("app", []).controller("myController", function($timeout,$interval){
	var vm = this;
	vm.stuff = "Linked";
	vm.imp = false;
	vm.imp2 = false;

	vm.seconds = 60;
	vm.breaks = 10;
	vm.message = "Start Your Workout!!";
	var breaks;
	var presets2;
	vm.runBreak = function(){
		vm.message="Break time!"
		vm.imp2 = true;
		presets2 = vm.breaks;
		breaks = $interval(function(){
			vm.breaks = vm.breaks - 1;
			if(vm.breaks === 0){
				vm.starts();
				vm.breaks = presets2;
				vm.imp2 = false;
				$interval.cancel(breaks);
			}
		}
			,1000);
	};

	var promise;

	var presets;
	vm.starts = function(){
		vm.message = "Push-ups!!!"
		vm.imp = true;
		presets = vm.seconds;
	if(promise === undefined || promise === ""){
	promise = $interval(function(){
		vm.seconds = vm.seconds - 1; 
		if(vm.seconds === 0){
			vm.imp = false;
			$interval.cancel(promise);
			vm.seconds = presets;
			promise = "";
			vm.runBreak();
		}
	},1000);
}else {return console.log("Already running")};
};
	vm.pause = function(){
		$interval.cancel(promise);
		$interval.cancel(breaks);
		promise = "";
	}
	vm.reset = function(){
		$interval.cancel(promise);
		$interval.cancel(breaks);
		promise = "";
		vm.seconds = 60;
		vm.breaks = 10;
		vm.imp = false;
		vm.message = "";
	}
});




