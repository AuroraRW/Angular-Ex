# Angular
#### Get Started
1. install angular (node, npm, angular cli)
2. install bootstrap3
- npm install --save bootstrap@3
- add "node_modules/bootstrap/dist/css/bootstrap.min.css" to "styles" in angular.json
#### The Basics
1. ng g c servers
2. Databinding
- Output Data (String interpolation; Property Binding--bind html properties)
- React to (User) Events (Event Binding)
- Two way (Two Way Binding)
3. Directive
- ngIf/ngStyle/ngClass/ngFor
#### Course project
1. ng new project
2. npm install --save bootstrap@3
3. add "node_modules/bootstrap/dist/css/bootstrap.min.css" to "styles" in angular.json
4. ng g c recipes --skipTests true (do not generate the test file)
5. ng g c recipes/recipe-list --skipTests true (in sub folder)
#### Components&Databinding
1. @Input(): from parent to child (itself); @Output(): from child (itself) to parent
2. view encapsulation: 'Emulated' is default (style scope is component), 'None' means style scope is global
3. Local reference: eg. serverNameInput refer the element
4. @ViewChild(): access DOM
5. ng-content: project content into components
6. @ContentChild()
7. Lifecycle