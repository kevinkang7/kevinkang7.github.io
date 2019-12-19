<?php $wd_map = $this->options; ?>

var wd_config = {
	'default':{
		'borderclr':'<?php echo $wd_map['borderclr']; ?>',
		'visnames':'<?php echo $wd_map['visnames']; ?>',
	}<?php echo (isset($wd_map['url_1']))?',':''; ?><?php $i = 1; 	while (isset($wd_map['url_'.$i])) { ?>'wd_<?php echo $i; ?>':{
		'hover': '<?php echo str_replace(array("\n","\r","\r\n","'"),array('','','','’'), is_array($wd_map['info_'.$i]) ?
				array_map('stripslashes_deep', $wd_map['info_'.$i]) : stripslashes($wd_map['info_'.$i])); ?>',
		'url':'<?php echo $wd_map['url_'.$i]; ?>',
		'targt':'<?php echo $wd_map['turl_'.$i]; ?>',
		'upclr':'<?php echo $wd_map['upclr_'.$i]; ?>',
		'ovrclr':'<?php echo $wd_map['ovrclr_'.$i]; ?>',
		'dwnclr':'<?php echo $wd_map['dwnclr_'.$i]; ?>',
		'enbl':<?php echo $wd_map['enbl_'.$i]=='1'?'true':'false'; ?>,
		'visnames':'wd_vn<?php echo $i; ?>',
		}
		<?php echo (isset($wd_map['url_'.($i+1)]))?',':''; ?><?php $i++;} ?>
}