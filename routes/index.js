
/*
 * GET home page.
 */

 var siteTitle = "Visible Human";

exports.index = function(req, res){
	
	var templateData = {
		title : siteTitle,
	}
  res.render('index', templateData);
};
