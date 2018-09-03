var recipes = new Object();


var obj = { prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, obj, {[key]: value });
}

updateObjectWithKeyAndValue(obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object;
}

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2);

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, obj);
  return delete newObj.prop;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}