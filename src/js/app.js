function healthCheck(obj) {
	if(obj.health < 15){
		return "critical"
	} else if (obj.health < 50) {
		return "wounded"
	} else {
		return "healthy"
	}
}

module.exports = healthCheck;
