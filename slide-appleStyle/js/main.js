let moveRange = 0 //初始化移动距离

let slideObj = {
	//绑定点击事件
	bindClick: function() {
		$('#pre').on('click', (e) => {
			slideObj.moveImg('left')
		})

		$('#next').on('click', (e) => {
			slideObj.moveImg('right')
		})

		for(let i = 0; i < 5; i++) {
			$('.pages').eq(i).on('click', () => {
				$('.imgContainer').css('margin-left', i * -400)
				moveRange = i * -400
			})
		}
	},
	//移动图片
	moveImg: function(where) {
		(where === 'left') ? moveRange += 400: moveRange -= 400
		if(moveRange > 0) {
			moveRange = -1600
		} else if(moveRange < -1600) {
			moveRange = 0
		}
		$('.imgContainer').css('margin-left', moveRange)
	},
	init: function() {
		this.bindClick()
	}
}

$(() => {
	slideObj.init()
})