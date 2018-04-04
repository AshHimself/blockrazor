_walletUpoadDirectory = '/var/www/static/images/wallets/'; //wallet upload directory
_walletUpoadDirectoryPublic = '/static/images/wallets/'; //The public facing image directory. Can't use above for now unless a standard is in place.
_walletFileSizeLimit = 9999999999; //max wallet filesize in bytes
_supportedFileTypes = ['image/png', 'image/gif', 'image/jpeg'];
_defaultFileSizeLimit = 9999999999

_coinUpoadDirectory = '/var/www/static/images/coin/';
_coinUpoadDirectoryPublic = '/static/images/coin/';
_coinFileSizeLimit = 2097152; //max wallet filesize in bytes

_hashPowerUploadDirectory = '/var/www/static/images/hashpower/'
_hashPowerUploadDirectoryPublic = '/static/images/hashpower/'
_hashPowerFileSizeLimit = 9999999999

_profilePictureUploadDirectory = '/var/www/static/images/profile/'
_profilePictureUploadDirectoryPublic = '/static/images/profile/'
_profilePictureFileSizeLimit = 9999999999

_problemUploadDirectory = '/var/www/static/images/problems/'
_problemUploadDirectoryPublic = '/static/images/problems/'
_problemFileSizeLimit = 9999999999

_communityUploadDirectory = '/var/www/static/images/community/'
_communityUploadDirectoryPublic = '/static/images/community/'

_watermarkLocation = '/var/www/static/images/watermark.png' //watermark image used in wallet watermarking.

_coinApprovalThreshold = 0;
_coinMergeDeleteThreshold = 3;

_globalDateFormat = 'DD/MM/YYYY'; //Global formatting of dates

_lazyAnsweringThreshold = 1
_lazyAnsweringErrorText = 'Lazy answering detected!. You\'ll have to start all over again.';
_lazyAnsweringWarningText = 'If this happens, your progress will be purged and bounties will be nullified.'

_validTransactionTypes = ['topCommentReward', 'hashReward', 'bountyReward','problemReward','createCoinReward','cheating','anwserQuestion']
