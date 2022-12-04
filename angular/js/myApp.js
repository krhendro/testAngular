var app = angular.module("myApp", ["angularUtils.directives.dirPagination"]);

app.controller('myCtrl', function($scope) 
{
	$scope.satuan = "Rp. ";
	
	$scope.items = [
		{
			id : 1,
			name : "Kursus Mikrotik Terlengkap, Lebih dari 100 Video Tutorial!", 
			desc : "Menjadi Profesional Network Engineer dengan menguasai Mikrotik Advanced! Belajar materi MTCNA, MTCRE, MTCUME, MTCTCEI",
			author : "Ahmad Rosid Komarudin", 
			website : "AgunaCourse.com | Kursus IT",
			rating : 4.7, 
			review : 596, 
			duration : 9.5,   
			lesson : 111, 
			level : "Pemula",
			price : 1199000,
			discount_price : 179000,
			date_created : "2022-11-28",
			photo : "1.jpg"
		},
		{
			id : 2,
			name : "Cisco Foundation Untuk Pemula", 
			desc : "Cisco Certified Network Entry Technician - Routing & Switching Certification",
			author : "Agus Setiawan", 
			website : "Nixtrain Academy",
			rating : 4.6, 
			review : 457, 
			duration : 7.5,   
			lesson : 78, 
			level : "Pemula",
			price : 249000,
			discount_price : 129000,
			date_created : "2022-10-01",
			photo : "2.jpg"
		},
		{
			id : 3,
			name : "3 dalam 1, CCNA, Python, dan Network Automation", 
			desc : "Kursus Python for Network Engineers. Belajar 3 materi dalam satu kursus, Networking, Python, dan Network Programming",
			author : "Ahmad Rosid Komarudin", 
			website : "AgunaCourse.com | Kursus IT",
			rating : 4.7, 
			review : 386, 
			duration : 7.5,   
			lesson : 76, 
			level : "Semua Tingkat",
			price : 1199000,
			discount_price : 179000,
			date_created : "2022-12-01",
			photo : "3.jpg"
		},
		{
			id : 4,
			name : "Veribet",
			desc : "Juvenile arthritis, unspecified, right wrist",
			author : "Anne-corinne Coulter",
			website : "unesco.org",
			rating : 2.2,
			review : 779,
			duration : 1,
			lesson : 116,
			level : "Pemula",
			price : 2263000,
			discount_price : 112000,
			date_created : "2022-01-07",
			photo : "4.jpg"
		},
		{
			id : 5,
			name : "Flexidy",
			desc : "Unspecified superficial injury of right index finger",
			author : "Nicko Penkethman",
			website : "acquirethisname.com",
			rating : 2.9,
			review : 903,
			duration : 6,
			lesson : 139,
			level : "Menengah",
			price : 2554000,
			discount_price : 202000,
			date_created : "2022-10-13",
			photo : "5.jpg"
		},
		{
			id : 6,
			name : "Namfix",
			desc : "Crystalline deposits in vitreous body, unspecified eye",
			author : "Bob Yendle",
			website : "chicagotribune.com",
			rating : 2.7,
			review : 349,
			duration : 4,
			lesson : 134,
			level : "Lanjut",
			price : 2389000,
			discount_price : 272000,
			date_created : "2022-11-18",
			photo : "6.jpg"
		},
		{
			id : 7,
			name : "Opela",
			desc : "Motorcycle rider (driver) (passenger) injured in unspecified traffic accident",
			author : "Trixie Compson",
			website : "aol.com",
			rating : 2.3,
			review : 160,
			duration : 8,
			lesson : 100,
			level : "Pemula",
			price : 1634000,
			discount_price : 204000,
			date_created : "2022-02-23",
			photo : "7.jpg"
		},
		{
			id : 8,
			name : "Cardguard",
			desc : "Open bite of abdominal wall, epigastric region without penetration into peritoneal cavity",
			author : "Julie Buller",
			website : "nydailynews.com",
			rating : 4.3,
			review : 493,
			duration : 8,
			lesson : 81,
			level : "Menengah",
			price : 2364000,
			discount_price : 135000,
			date_created : "2022-07-21",
			photo : "8.jpg"
		},
		{
			id : 9,
			name : "Fixflex",
			desc : "Laceration of blood vessel of left ring finger, subsequent encounter",
			author : "Nan Dries",
			website : "ifeng.com",
			rating : 2.8,
			review : 41,
			duration : 3,
			lesson : 89,
			level : "Lanjut",
			price : 2286000,
			discount_price : 258000,
			date_created : "2022-08-13",
			photo : "9.jpg"
		},
		{
			id : 10,
			name : "Pannier",
			desc : "Motorcycle passenger injured in collision with railway train or railway vehicle in traffic accident, sequela",
			author : "Janey Puttick",
			website : "whitehouse.gov",
			rating : 4.0,
			review : 599,
			duration : 1,
			lesson : 19,
			level : "Pemula",
			price : 2390000,
			discount_price : 139000,
			date_created : "2022-07-24",
			photo : "10.jpg"
		},
		{
			id : 11,
			name : "Voyatouch",
			desc : "Pathological fracture in neoplastic disease, unspecified hand, sequela",
			author : "Stevana Cassie",
			website : "forbes.com",
			rating : 1.5,
			review  : 43,
			duration : 9,
			lesson : 95,
			level : "Menengah",
			price : 2622000,
			discount_price : 294000,
			date_created : "2022-12-01",
			photo : "11.jpg"
		},
		{
			id : 12,
			name : "Prodder",
			desc : "Other specified sprain of left wrist, subsequent encounter",
			author :"Leanna Hamel",
			website : "spiegel.de",
			rating : 2.9,
			review : 626,
			duration : 6,
			lesson : 128,
			level : "Lanjut",
			price : 2587000,
			discount_price : 237000,
			date_created : "2022-07-30",
			photo : "12.jpg"
		},
		{
			id :13,
			name : "Stringtough",
			desc : "Displaced fracture of capitate [os magnum] bone, unspecified wrist, subsequent encounter for fracture with malunion",
			author : "Mela Bradnocke",
			website : "hexun.com",
			rating : 4.1,
			review : 402,
			duration : 3,
			lesson : 96,
			level : "Pemula",
			price : 1948000,
			discount_price : 207000,
			date_created : "2022-11-11",
			photo : "13.jpg"
		},
		{
			id : 14,
			name : "Lotstring",
			desc : "Prolonged second stage (of labor)",
			author : "Randa Barrington",
			website : "flavors.me",
			rating : 3.6,
			review : 882,
			duration : 2,
			lesson : 85,
			level : "Menengah",
			price : 2735000,
			discount_price : 112000,
			date_created : "2022-07-31",
			photo : "14.jpg"
		},
		{
			id : 15,
			name : "Trippledex",
			desc : "Intentional self-harm by machine gun discharge, sequela",
			author : "Francis Deem",
			website : "ask.com",
			rating : 4.6,
			review : 0,
			duration : 9,
			lesson : 189,
			level : "Lanjut",
			price : 2474000,
			discount_price : 237000,
			date_created : "2022-11-28",
			photo : "15.jpg"
		},
		{
			id : 16,
			name : "Bamity",
			desc : "Major laceration of thoracic aorta, sequela",
			author : "Niels Candish",
			website : "huffingtonpost.com",
			rating : 4.1,
			review : 34,
			duration : 7,
			lesson : 176,
			level : "Pemula",
			price : 1561000,
			discount_price : 208000,
			date_created : "2022-09-03",
			photo : "16.jpg"
		},
		{
			id :17,
			name : "Tres-Zap",
			desc : "Paralytic calcification and ossification of muscle, hand",
			author : "Jolee Capelle",
			website : "ameblo.jp",
			rating : 4.8,
			review : 711,
			duration : 8,
			lesson : 36,
			level : "Menengah",
			price : 1919000,
			discount_price : 103000,
			date_created : "2022-09-19",
			photo : "17.jpg"
		},
		{
			id :18,
			name : "Tres-Zap",
			desc : "Subluxation of carpometacarpal joint of left thumb, sequela",
			author : "Odille Denisot",
			website : "php.net",
			rating : 2.2,
			review : 816,
			duration : 10,
			lesson : 98,
			level  :"Lanjut",
			price : 2161000,
			discount_price : 170000,
			date_created : "2022-09-05",
			photo : "18.jpg"
		},
		{
			id :19,
			name : "Alphazap",
			desc : "Irregular menstruation, unspecified",
			author : "Akim McElory",
			website : "mashable.com",
			rating : 4.8,
			review : 934,
			duration : 8,
			lesson : 165,
			level : "Pemula",
			price : 2555000,
			discount_price : 108000,
			date_created : "2022-09-07",
			photo : "19.jpg"
		},
		{
			id :20,
			name : "Vagram",
			desc : "Ocular hypertension, bilateral","author":"Tracee Screach",
			website : "si.edu",
			rating : 3.0,
			review : 0,
			duration : 1,
			lesson : 130,
			level : "Menengah",
			price : 1625000,
			discount_price : 221000,
			date_created : "2022-12-01",
			photo : "20.jpg"
		}];
	
	$scope.class_sort = "bi bi-sort-up-alt";
	$scope.wishlist = "bi bi-heart";
	
	$scope.sort = function(keyname)
	{
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
		
		if($scope.class_sort == "bi bi-sort-up-alt")
		{
			$scope.class_sort = "bi bi-sort-down";
		}
		else
		{
			$scope.class_sort = "bi bi-sort-up-alt";
		}
	}
	
	$scope.getStars = function(rating) 
	{
		// Get the value
		var val = parseFloat(rating);
		// Turn value into number/100
		var size = val/5*100;
		return size + '%';
	}
	
	$scope.checkReview = function(review)
	{
		if(review == 0)
		{
			return "No Review Yet";
		}
		else
		{
			return review;
		}
	}
	
	$scope.checkSelling = function(review, rating)
	{
		if(review > 20 && rating > 4)
		{
			return "BEST SELLER";
		}
	}
	
	$scope.checkDate = function(date_created)
	{
		var curr_d = new Date(date_created);
		
		var begin_d = new Date();
		var end_d = new Date();
		
		end_d.setDate(begin_d.getDate() - 7);
		
		if(curr_d < begin_d && curr_d >= end_d)
		{
			return "NEW";
		}
	}
	
	
	$scope.checkHot = function(date_created, review, rating)
	{
		var label_d = $scope.checkDate(date_created);
		var selling = $scope.checkSelling(review, rating);
		
		if(label_d == "NEW" && selling == "BEST SELLER")
		{
			return "HOT LESSON";
		}
	}
	
	$scope.changeWishlist = function(wishlist, id)
	{
		var wishlist_id = "wishlist_"+id;
		
		if(document.getElementById(wishlist_id).className == "bi bi-heart")
		{
			document.getElementById(wishlist_id).className = "bi bi-heart-fill";
		}
		else
		{
			document.getElementById(wishlist_id).className = "bi bi-heart";
		}
	}


	
});