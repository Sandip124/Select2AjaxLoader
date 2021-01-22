## Select2 Ajax Loader

Simple Helper method to  load data in  select2 drop down with custom loader.

HTML
```HTML
<script src="https://cdn.jsdelivr.net/gh/Sandip124/Select2AjaxLoader/app.js" type="text/javascript"></script>
```
Js
```Js
Select2AjaxLoader($("#BranchId"),$("#userId"),"/api/users/branch/","Error while fetching user list","Id","Name",false);
```

|Parameter| Meaning  |
|--|--|
| [0] | Represents parent element which is being changed.  |
| [1] |Represent child element where the data is fetched and initialized  data.|
| [2] | Fetch Url|
| [3] | Error Message if failed |
| [4] | Value Member |
| [5] | Display Member |
| [6] | Show All Option (Can be used in the  form while filtering data.) |

