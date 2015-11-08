(function(){
  	angular.module('Demo', []);
})();
(function(){	
	// primary view
		angular.module('Demo').controller("AppController", function( $scope ) {
				// I am the title display in the browser window.
				$scope.windowTitle = "Loading... simmer down now!";
				// I determine which layout component is being included.
				$scope.layout = "primary";
				// ---
				// PUBLIC METHODS.
				// ---
				// I set the browser window title to the given title.
				$scope.setWindowTitle = function( title ) {
					$scope.windowTitle = title;
				};
				// I set the current layout to primary.
				$scope.showPrimaryLayout = function() {
					$scope.layout = "primary";
					console.log($scope.layout);
				};
				// I set the current layout to secondary.
				$scope.showSecondaryLayout = function() {
					$scope.layout = "secondary";
					console.log($scope.layout);
				};
				$scope.showThirdLayout = function() {
					$scope.layout = "Third";
					console.log($scope.layout);
				};
			});
		angular.module( "Demo" ).controller("PrimaryLayoutController", function( $scope ) {
			// Set the browser window title.
			// --
			// CAUTION: Inherited scope method.
				$scope.setWindowTitle( "Showing Primary Layout!" );
			});	
		angular.module( "Demo" ).controller("SecondaryLayoutController",function( $scope ) {
					// Set the browser window title.
					// --
					// CAUTION: Inherited scope method.
					$scope.setWindowTitle( "Showing Secondary Layout!" );

				}
			);
		angular.module( "Demo" ).directive("primaryLayout", function() {
		// Return the directive configuration.
				return({
					controller: "PrimaryLayoutController",
					link: link,
					restrict: "A",
					templateUrl: "primary-layout/primary-layout.htm"
				});
				// I bind the JavaScript events to the scope.
				function link( scope, element, attributes ) {

					console.log( "Primary layout directive linking." );
				}
			});
		angular.module( "Demo" ).directive("secondaryLayout", function() {
		// Return the directive configuration.
				return({
					controller: "SecondaryLayoutController",
					link: link,
					restrict: "A",
					templateUrl: "secondary-layout/secondary-layout.htm"
				});
				// I bind the JavaScript events to the scope.
				function link( scope, element, attributes ) {

					console.log( "Secondary layout directive linking." );

				}

			});
		angular.module( "Demo" ).directive("thirdLayout", function() {
		// Return the directive configuration.
				return({
					controller: "SecondaryLayoutController",
					link: link,
					restrict: "A",
					templateUrl: "secondary-layout/secondary-layout.htm"
				});
				// I bind the JavaScript events to the scope.
				function link( scope, element, attributes ) {

					console.log( "Secondary layout directive linking." );

				}

			});
})();