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
#ifndef __CCX_PLUGIN_PARAM_H__
#define __CCX_PLUGIN_PARAM_H__

#include <map>
#include <string>

typedef std::map<std::string, std::string>   StringMap;

namespace cocos2d { namespace plugin {
	class PluginProtocol;
	class PluginParam
	{
	public:
		PluginParam();
		PluginParam(int nValue);
		PluginParam(float fValue);
		PluginParam(bool bValue);
		PluginParam(const char* strValue);
		PluginParam(StringMap strMapValue);

		typedef enum{
			kParamTypeNull = 0,
			kParamTypeInt,
			kParamTypeFloat,
			kParamTypeBool,
			kParamTypeString,
			kParamTypeStringMap,
			kParamTypeMap,
		} ParamType;

		inline ParamType getCurrentType() {
			return m_type;
		}

		inline int getIntValue() {
			return m_nValue;
		}

		inline float getFloatValue() {
			return m_fValue;
		}

		inline bool getBoolValue() {
			return m_bValue;
		}

		inline const char* getStringValue() {
			return m_strValue.c_str();
		}

		inline std::map<std::string, PluginParam*> getMapValue() {
			return m_mapValue;
		}

		inline StringMap getStrMapValue() {
			return m_strMapValue;
		}

	private:
		friend class PluginProtocol;
		PluginParam(std::map<std::string, PluginParam*> mapValue);

	private:
		ParamType m_type;

		int m_nValue;
		float m_fValue;
		bool m_bValue;
		std::string m_strValue;
		std::map<std::string, PluginParam*> m_mapValue;
		StringMap m_strMapValue;
	};
}} //namespace cocos2d { namespace plugin {
#endif /* __CCX_PLUGIN_PARAM_H__ */
