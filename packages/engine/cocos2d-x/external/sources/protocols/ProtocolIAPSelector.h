/****************************************************************************
Copyright (c) 2012-2013 cocos2d-x.org

http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
#ifndef __CCX_PROTOCOL_IAPSELECTOR_H__
#define __CCX_PROTOCOL_IAPSELECTOR_H__

#include "PluginProtocol.h"
#include "ProtocolIAP.h"
#include <map>
#include <string>

namespace cocos2d { namespace plugin {
	typedef std::map<std::string, std::map<std::string, std::string> > PIAPDeveloperInfo;

	class ProtocolIAPSelector : public PluginProtocol, PayResultListener
	{
	public:
		ProtocolIAPSelector();
		virtual ~ProtocolIAPSelector();

		/**
		@brief config the developer info
		@param devInfo This parameter is the info of developer,
		different plugin have different format
		@warning Must invoke this interface before other interfaces.
		And invoked only once.
		*/
		void configDeveloperInfo(PIAPDeveloperInfo devInfo);

		void payForProduct(TProductInfo info);
		/**
		@brief pay for product
		@param productInfo The TProductInfo
		*/
		void payForProductWithName(TProductInfo info, const char* iap_name);

		/**
		@breif set the result listener
		@param pListener The callback object for pay result
		@wraning Must invoke this interface before payForP
		roduct.
		*/
		void setPayResultListener(PayResultListener* pListener);

		/**
		@brief pay result callback
		*/
		void onPaySelectorResult( const char* name, const char* msg);

		void onPayResult(PayResultCode ret, const char* msg, TProductInfo info);

	protected:
		static bool p_bPaying;

		std::map<std::string, ProtocolIAP*> map_iaps_;

		PayResultListener* p_pPayResultListener;

	public:
		TProductInfo p_curInfo;
	};
}} // namespace cocos2d { namespace plugin {
#endif /* __CCX_PROTOCOL_IAP_H__ */
