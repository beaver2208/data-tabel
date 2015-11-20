(function($){
	
var techArr = [
	'Head of Sales1', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales2', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales3', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales4', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales5', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales6', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales7', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales8', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales9', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate',
	'Head of Sales10', 'Los Angeles, California', '$100 000', 'OK', '$1080', 'Chris Abate'],
	salesArr = [
		'Sales1', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales2', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales3', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales4', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales5', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales6', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales7', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales8', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales9', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Sales10', 'Sales', '$100 000', 'OK', '$1080', 'Chris Abate'],
	markArr = [
		'Marketing', 'Marketing', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Marketing', 'Marketing', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Marketing', 'Marketing', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Marketing', 'Marketing', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Marketing', 'Marketing', '$100 000', 'OK', '$1080', 'Chris Abate'],
	operArr = [
		'Operations', 'Operations', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Operations', 'Operations', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Operations', 'Operations', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Operations', 'Operations', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Operations', 'Operations', '$100 000', 'OK', '$1080', 'Chris Abate'],
	profArr = [
		'Professional', 'Professional', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Professional', 'Professional', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Professional', 'Professional', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Professional', 'Professional', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Professional', 'Professional', '$100 000', 'OK', '$1080', 'Chris Abate'],
	hrArr = [
		'HR', 'HR', '$100 000', 'OK', '$1080', 'Chris Abate',
		'HR', 'HR', '$100 000', 'OK', '$1080', 'Chris Abate',
		'HR', 'HR', '$100 000', 'OK', '$1080', 'Chris Abate',
		'HR', 'HR', '$100 000', 'OK', '$1080', 'Chris Abate',
		'HR', 'HR', '$100 000', 'OK', '$1080', 'Chris Abate'],
	healthArr = [
		'Healthcare', 'Healthcare', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Healthcare', 'Healthcare', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Healthcare', 'Healthcare', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Healthcare', 'Healthcare', '$100 000', 'OK', '$1080', 'Chris Abate',
		'Healthcare', 'Healthcare', '$100 000', 'OK', '$1080', 'Chris Abate'];


/* подсветка текущего пункта меню */
$('#table_menu').click(function(e) {

	$('#table_menu').each(function(i) {
		if ($('#table_menu').children().hasClass('green_menu')) {
			$('#table_menu').children().removeClass('green_menu');
		};

		if (e.target.tagName === 'LI') {
			$(e.target).addClass('green_menu');
		};

	});
});



/* добавление первоначальных данных в таблицу */

$('#tbody tr td').each(function(i) {
	$(this).html(techArr[i])
});
if (techArr.length > 30) {
	$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>')
};
$('#tfoot>tr>td>span:eq(0)').click(function() {
	$('#tbody tr td').each(function(i) {
		$(this).html(techArr[i])
	})
});
$('#tfoot>tr>td>span:eq(1)').click(function() {
	$('#tbody tr td').each(function(i) {
		i += 30;
		$(this).html(techArr[i])
	})
});

/* смена данных в таблице */

$('#table_menu').click(function(e) {
	if (e.target.id === 'tech') {
		$('#tbody tr td').each(function(i) {
			$(this).html(techArr[i])
		});
		$('#tfoot>tr>td>span').remove();
		if (techArr.length > 30) {
			$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>');
		};
		$('#tfoot>tr>td>span:eq(0)').click(function() {
			$('#tbody tr td').each(function(i) {
				$(this).html(techArr[i])
			});
		});
		$('#tfoot>tr>td>span:eq(1)').click(function() {
			$('#tbody tr td').each(function(i) {
				i += 30;
				$(this).html(techArr[i])
			});
		})

	} else if (e.target.id === 'sales') {
		$('#tbody tr td').each(function(i) {
			$(this).html(salesArr[i])
		});
		$('#tfoot>tr>td>span').remove();
		if (salesArr.length > 30) {
			$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>');
		};
		$('#tfoot>tr>td>span:eq(0)').click(function() {
			$('#tbody tr td').each(function(i) {
				$(this).html(salesArr[i])
			});
		});
		$('#tfoot>tr>td>span:eq(1)').click(function() {
			$('#tbody tr td').each(function(i) {
				i += 30;
				$(this).html(salesArr[i]);
			});
		})

	} else if (e.target.id === 'mark') {
		$('#tbody tr td').each(function(i) {
			$(this).html(markArr[i])
		});
		$('#tfoot>tr>td>span').remove();
		if (markArr.length > 30) {
			$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>');
		};
		$('#tfoot>tr>td>span:eq(0)').click(function() {
			$('#tbody tr td').each(function(i) {
				$(this).html(markArr[i])
			});
		});
		$('#tfoot>tr>td>span:eq(1)').click(function() {
			$('#tbody tr td').each(function(i) {
				i += 30;
				$(this).html(markArr[i]);
			});
		})

	} else if (e.target.id === 'oper') {
		$('#tbody tr td').each(function(i) {
			$(this).html(operArr[i])
		});
		$('#tfoot>tr>td>span').remove();
		if (operArr.length > 30) {
			$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>');
		};
		$('#tfoot>tr>td>span:eq(0)').click(function() {
			$('#tbody tr td').each(function(i) {
				$(this).html(operArr[i])
			});
		});
		$('#tfoot>tr>td>span:eq(1)').click(function() {
			$('#tbody tr td').each(function(i) {
				i += 30;
				$(this).html(operArr[i]);
			});
		})

	} else if (e.target.id === 'prof') {
		$('#tbody tr td').each(function(i) {
			$(this).html(profArr[i])
		});
		$('#tfoot>tr>td>span').remove();
		if (profArr.length > 30) {
			$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>');
		};
		$('#tfoot>tr>td>span:eq(0)').click(function() {
			$('#tbody tr td').each(function(i) {
				$(this).html(profArr[i])
			});
		});
		$('#tfoot>tr>td>span:eq(1)').click(function() {
			$('#tbody tr td').each(function(i) {
				i += 30;
				$(this).html(profArr[i]);
			});
		})
	} else if (e.target.id === 'hr') {
		$('#tbody tr td').each(function(i) {
			$(this).html(hrArr[i])
		});
		$('#tfoot>tr>td>span').remove();
		if (hrArr.length > 30) {
			$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>');
		};
		$('#tfoot>tr>td>span:eq(0)').click(function() {
			$('#tbody tr td').each(function(i) {
				$(this).html(hrArr[i])
			});
		});
		$('#tfoot>tr>td>span:eq(1)').click(function() {
			$('#tbody tr td').each(function(i) {
				i += 30;
				$(this).html(hrArr[i]);
			});
		})
	} else if (e.target.id === 'health') {
		$('#tbody tr td').each(function(i) {
			$(this).html(healthArr[i])
		});
		$('#tfoot>tr>td>span').remove();
		if (healthArr.length > 30) {
			$('#tfoot>tr>td').append('<span class="blue_circle"> &#9679; </span><span> &#9679; </span>');
		};
		$('#tfoot>tr>td>span:eq(0)').click(function() {
			$('#tbody tr td').each(function(i) {
				$(this).html(healthArr[i])
			});
		});
		$('#tfoot>tr>td>span:eq(1)').click(function() {
			$('#tbody tr td').each(function(i) {
				i += 30;
				$(this).html(healthArr[i]);
			});
		})
	};
});

/* подсветка маркера внизу таблицы */
$('#tfoot').click(function(e) {

	$('#tfoot>tr>td>span').each(function(i) {
		if ($('#tfoot>tr>td>span').hasClass('blue_circle')) {
			$('#tfoot>tr>td>span').removeClass('blue_circle');
		};

		if (e.target.tagName === 'SPAN') {
			$(e.target).addClass('blue_circle');
		};

	});
});

}(jQuery));