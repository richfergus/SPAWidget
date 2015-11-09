(function(){
  	angular.module('Demo', []);
})();
(function(){	
	// main view
		angular.module('Demo').controller("AppController", function( $scope ) {
				// I am the title display in the browser window.
				$scope.windowTitle = "Loading... simmer down now!";
				// I determine which layout component is being included.
				$scope.layout = "main";
				// ---
				// PUBLIC METHODS.
				// ---
				// I set the browser window title to the given title.
				$scope.setWindowTitle = function( title ) {
					$scope.windowTitle = title;
				};
				// I set the current layout to main.
				$scope.showMainLayout = function() {
					$scope.layout = "main";
					console.log($scope.layout);
				};
				// I set the current layout to detailed.
				$scope.showDetailedLayout = function() {
					$scope.layout = "detailed";
					console.log($scope.layout);
				};
				$scope.showThirdLayout = function() {
					$scope.layout = "Third";
					console.log($scope.layout);
				};
			});
		angular.module( "Demo" ).controller("MainLayoutController", function( $scope ) {
			// Set the browser window title.
			// --
			// CAUTION: Inherited scope method.
				$scope.setWindowTitle( "Showing Main Layout!" );
			});	
		angular.module( "Demo" ).controller("DetailedLayoutController",function( $scope ) {
					// Set the browser window title.
					// --
					// CAUTION: Inherited scope method.
					$scope.setWindowTitle( "Showing Detailed Layout!" );

				}
			);
		angular.module( "Demo" ).directive("mainLayout", function() {
		// Return the directive configuration.
				return({
					controller: "MainLayoutController",
					link: link,
					restrict: "A",
					templateUrl: "main/main-layout.htm"
				});
				// I bind the JavaScript events to the scope.
				function link( scope, element, attributes ) {

					console.log( "Main layout directive linking." );
				}
			});
		angular.module( "Demo" ).directive("detailedLayout", function() {
		// Return the directive configuration.
				return({
					controller: "DetailedLayoutController",
					link: link,
					restrict: "A",
					templateUrl: "detailed/detailed-layout.htm"
				});
				// I bind the JavaScript events to the scope.
				function link( scope, element, attributes ) {

					console.log( "Detailed layout directive linking." );

				}

			});
		angular.module( "Demo" ).directive("thirdLayout", function() {
		// Return the directive configuration.
				return({
					controller: "DetailedLayoutController",
					link: link,
					restrict: "A",
					templateUrl: "detailed/detailed-layout.htm"
				});
				// I bind the JavaScript events to the scope.
				function link( scope, element, attributes ) {

					console.log( "Detailed layout directive linking." );

				}

			});
})();